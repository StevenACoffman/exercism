import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;

import static java.util.function.Function.identity;
import static java.util.stream.Collectors.groupingBy;
import static java.util.stream.Collectors.summingInt;

public class WordCount {
    public Map<String, Integer> phrase(String phrase) {
        return lowerCaseWords(phrase)
                .stream()
                .collect(groupingBy(identity(), counting()));
    }

    private List<String> lowerCaseWords(String phrase) {
        return Arrays.asList(
                phrase
                        .toLowerCase()
                        .split("\\W+")); // \W == non-word character, + == greedy
    }

    private static <T> Collector<T, ?, Integer> counting() {
        return summingInt(e -> 1);
    }
}
