import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.toMap;

public class Etl {

    public Map<String, Integer> transform(final Map<Integer, List<String>> oldScoring) {
        return oldScoring.entrySet()
                .stream()
                .flatMap(oldScore -> oldScore.getValue()
                        .stream()
                        .map(letter -> new Scoring(letter.toLowerCase(), oldScore.getKey())))
                .collect(toMap(Scoring::getLetter, Scoring::getScore));
    }

    private static class Scoring {

        private final String letter;
        private final Integer score;

        public Scoring(String letter, Integer score) {
            this.letter = letter;
            this.score = score;
        }

        public String getLetter() {
            return letter;
        }

        public Integer getScore() {
            return score;
        }
    }
}
