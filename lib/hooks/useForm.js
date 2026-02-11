import { useState } from 'react';

/**
 * Institutional Form Logic
 * Manages state, validation, and submission for complex data entries.
 */
export default function useForm(initialValues = {}, onSubmit, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length > 0) {
                setIsSubmitting(false);
                return;
            }
        }

        try {
            await onSubmit(values);
        } catch (error) {
            console.error('Submission Logic Violation:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const reset = () => setValues(initialValues);

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        reset,
        setValues
    };
}
