export function formatterCurrency(value: number, currency?: string) {
    return new Intl.NumberFormat("es-CO", {
        currency: currency || "COP",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: "currency",
    })?.format(value);
}
// Example of use: formatterCurrency(1000000, "USD");
// Result: "$1,000,000"

export function formatterLongDate(date: Date) {
    return new Intl.DateTimeFormat("es-CO", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })?.format(date);
}
// Example of use: formatterLongDate(new Date());
// Result: "6 de septiembre de 2021"

export function formatterShortDate(date: Date) {
    return new Intl.DateTimeFormat("es-CO", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    })?.format(date);
}
// Example of use: formatterShortDate(new Date());
// Result: "6/9/2021"