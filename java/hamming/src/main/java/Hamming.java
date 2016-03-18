public class Hamming {
    public static Integer compute(String first, String second) {

        checkLengthEquality(first, second);

        int count = 0;
        for (int position = 0; position < first.length(); position++) {
            if(first.charAt(position) != (second.charAt(position))) {
                count++;
            }
        }
        return count;
    }

    private static void checkLengthEquality(String first, String second) {
        if(first.length() != second.length()){
            throw new IllegalArgumentException("First strand ("+first+") length not equal second strand ("+second+") length");
        }
    }
}
