import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Stream;

public class Bob {
    public String hey(String input) {
        final String cleanedInput = (input != null ? input : "");

        return Stream.of(silence, shouting, question)
                .map(listener -> listener.apply(cleanedInput))
                .filter(response -> response.isPresent())
                .map(response -> response.get())
                .findFirst()
                .orElse("Whatever.");
    }

    private static Function<String, Optional<String>> when(Predicate<String> matcher, String response) {
        return then.apply(response).apply(matcher);
    }

    private static Function<String, Function<Predicate<String>, Function<String, Optional<String>>>> then
            = response -> matcher -> phrase -> Optional.of(phrase).filter(matcher).map(ignore -> response);

    private static Predicate<String> isSilent = input -> input.trim().isEmpty();

    private static Predicate<String> isShouting = input -> input.toUpperCase().equals(input)
            && !input.equals(input.toLowerCase());

    private static Predicate<String> isQuestion = input -> input.endsWith("?");

    private static Function<String, Optional<String>> silence = when(isSilent, "Fine. Be that way!");
    private static Function<String, Optional<String>> shouting = when(isShouting, "Whoa, chill out!");
    private static Function<String, Optional<String>> question = when(isQuestion, "Sure.");
}