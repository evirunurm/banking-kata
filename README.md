# Banking Kata
## Requisitos
Nuestra aplicación debe permitir:

- Hacer un depósito en la cuenta
- Retirar de la cuenta
- Imprimir los asientos de la cuenta a través de la consola
- El resultado de imprimir los asientos debe ser como el siguiente:

``` txt
Date       | Amount | Balance

14/01/2022 | 2000.00   | 2500.00

13/01/2022 | -500.00   | 500.00

10/01/2022 | 1000.00   | 1000.00
```

La única restricción que tiene el ejercicio es que debemos respetar la interfaz de la clase que estás viendo y no podemos añadir ningún otro método público

``` ts
export class Account {
  deposit(amount: number): void 
  withdraw(amount: number): void 
  printStatement(): void 
}
```