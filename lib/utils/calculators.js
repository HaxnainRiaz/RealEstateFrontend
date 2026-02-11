/**
 * Yield Probability Forensic
 * Calculates capital cap rates and annual yields.
 */
export const calculateYield = (rent, price) => {
    if (!price || price === 0) return 0;
    return ((rent * 12) / price * 100).toFixed(2);
};

/**
 * Mortgage Amortization Logic
 */
export const calculateMonthlyPayment = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    if (monthlyRate === 0) return principal / numberOfPayments;

    return (
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
};

/**
 * Net Operating Income Forensic
 */
export const calculateNOI = (revenue, opex) => {
    return revenue - opex;
};
