import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Anagram {
    private final String sortedTestLetters;
    private final String originalWord;
    public Anagram(String testWord) {
        originalWord = testWord;
        sortedTestLetters = sortAndLowerCaseLetters(testWord);
    }

    private String sortAndLowerCaseLetters(String word) {
        return Stream.of(word.toLowerCase().split(""))
                .sorted()
                .collect(Collectors.joining(""));
    }

    public List<String> match(List<String> candidates) {
        return candidates.stream()
                .filter(word -> !originalWord.equalsIgnoreCase(word))
                .filter(word -> sortedTestLetters.equals(sortAndLowerCaseLetters(word)))
                .collect(Collectors.toList());
    }
}
