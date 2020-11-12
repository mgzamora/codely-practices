public interface RunnerAnimal {
    void run();
}

public interface BarkingAnimal {
    void bark();
}

public interface FlyingAnimal {
    void fly();
}

public class Dog implements RunnerAnimal, BarkingAnimal {
    public void run() {
        System.out.print("Dog is running");
    }

    public void bark() {
        System.out.print("Dog is barking");
    }
}

public class Bird implements RunnerAnimal, FlyingAnimal {
    public void run() {
        System.out.print("Bird is running");
    }
    public void fly() {
        System.out.print("Bird is flying");
    }
}