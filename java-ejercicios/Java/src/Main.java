import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {

        System.out.println("Hello, World!");

        String myString = "Esto es un String";
        myString = "Aqui cambio el valor del String";

        System.out.println(myString);

        Integer myInteger = 10;
        myInteger = 20;
        System.out.println(myInteger);

        Double myDouble = 10.0;
        myDouble = 20.0;
        System.out.println(myDouble);

        Float myFloat = 10.0f;
        myFloat = 20.0f;
        System.out.println(myFloat);

        System.out.println(myDouble + myFloat);

        Boolean myBoolean = true;
        myBoolean = false;
        System.out.println(myBoolean);

        myBoolean = null;
        System.out.println(myBoolean);

        myFloat = 10.0f;
        System.out.println(myFloat + 10);
        if (myFloat != null) {
            System.out.println("Es diferente a null");
        }

        if (myInteger == 11) {
            System.out.println("myInt = 11");
        } else if (myInteger == 12) {
            System.out.println("myInt = 12");
        } else {
            System.out.println("myInt != 11 y myInt != 12");
        }

        // List<String> myList = new ArrayList();
        // myList.add(myString);
        // System.out.println(myList);

        // Map myMap = new HashMap();
        // myMap.put("string", myString);
        // myMap.put("integer", myInteger);
        // System.out.println(myMap);
        // System.out.println(myMap.get("integer"));

        /*
         * for (int index = 0; index < myList.size(); index++) {
         * System.out.println(myList.get(index));
         * }
         */

        Main myMain = new Main();
        // myMain.myFunction(10, 20);
    }

    public void myFunction(int myFirstNumber, int mySecondNumber) {
        System.out.println("My first number is " + myFirstNumber);
        System.out.println("My second number is " + mySecondNumber);
    }

}
