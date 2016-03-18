import java.util.stream.Stream;

public class Pangrams {

    public static final int ALPHABET_LENGTH = 26;

    public static boolean isPangram(String dirtyCandidate) {
        String cleanedCandidate = dirtyCandidate.toLowerCase().replaceAll("[^a-z]", "");
        return Stream.of(cleanedCandidate.split("")).distinct().count() == ALPHABET_LENGTH;
    }
}