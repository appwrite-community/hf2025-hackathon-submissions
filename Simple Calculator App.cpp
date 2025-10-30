#include <iostream>
using namespace std;

int main() {
    int choice;
    double num1, num2, result;

    cout << "=== Simple Calculator App ===" << endl;
    cout << "1. Add\n2. Subtract\n3. Multiply\n4. Divide\n";
    cout << "Enter your choice (1-4): ";
    cin >> choice;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    switch (choice) {
        case 1: result = num1 + num2; break;
        case 2: result = num1 - num2; break;
        case 3: result = num1 * num2; break;
        case 4:
            if (num2 != 0)
                result = num1 / num2;
            else {
                cout << "Error: Division by zero!" << endl;
                return 0;
            }
            break;
        default:
            cout << "Invalid choice!" << endl;
            return 0;
    }

    cout << "Result = " << result << endl;
    return 0;
}
