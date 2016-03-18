import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DNA {
    private static final List VALID = Arrays.asList('A', 'C', 'G', 'T');
    private final Map<Character, Integer> nucleotideCount = new HashMap<Character, Integer>();

    public DNA(String strand) {
        VALID.stream().forEach(c -> nucleotideCount.put((Character)c, 0));
        strand.chars().forEach(this::incrementNucleotideCount);
    }

    private void incrementNucleotideCount(int nucleotideAsInt) {
        Character nucleotide = Character.valueOf((char) nucleotideAsInt);
        Integer currentValue = nucleotideCount.get(nucleotide);
        nucleotideCount.put(nucleotide, currentValue + 1);
    }

    public int count(char letter) {
        if (!VALID.contains(letter)) {
            throw new IllegalArgumentException("Attempted to count invalid nucleotide: " + letter + " when expected A,C,G,T");
        }
        return nucleotideCount.get(letter);
    }

    public Map<Character, Integer> nucleotideCounts() {
        return nucleotideCount;
    }
}
