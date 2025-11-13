export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface FormField {
  name: string;
  value: string;
  rules?: ValidationRule[];
}

export interface ValidationRule {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: number | string | RegExp;
  message: string;
  validator?: (value: string) => boolean;
}

export function validateField(field: FormField): string[] {
  const errors: string[] = [];
  
  if (!field.rules || field.rules.length === 0) {
    return errors;
  }
  
  for (const rule of field.rules) {
    const value = field.value.trim();
    
    switch (rule.type) {
      case 'required':
        if (!value) {
          errors.push(rule.message);
        }
        break;
        
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailPattern.test(value)) {
          errors.push(rule.message);
        }
        break;
        
      case 'minLength':
        if (value && value.length < (rule.value as number)) {
          errors.push(rule.message);
        }
        break;
        
      case 'maxLength':
        if (value && value.length > (rule.value as number)) {
          errors.push(rule.message);
        }
        break;
        
      case 'pattern':
        if (value && rule.value instanceof RegExp && !rule.value.test(value)) {
          errors.push(rule.message);
        }
        break;
        
      case 'custom':
        if (value && rule.validator && !rule.validator(value)) {
          errors.push(rule.message);
        }
        break;
    }
  }
  
  return errors;
}

export function validateForm(fields: FormField[]): ValidationResult {
  const errors: Record<string, string> = {};
  let isValid = true;
  
  for (const field of fields) {
    const fieldErrors = validateField(field);
    if (fieldErrors.length > 0) {
      errors[field.name] = fieldErrors[0]; // Show first error
      isValid = false;
    }
  }
  
  return { isValid, errors };
}

// Common validation rules
export const commonRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    type: 'required',
    message,
  }),
  
  email: (message = 'Please enter a valid email address'): ValidationRule => ({
    type: 'email',
    message,
  }),
  
  minLength: (length: number, message?: string): ValidationRule => ({
    type: 'minLength',
    value: length,
    message: message || `Must be at least ${length} characters`,
  }),
  
  maxLength: (length: number, message?: string): ValidationRule => ({
    type: 'maxLength',
    value: length,
    message: message || `Must be no more than ${length} characters`,
  }),
  
  pattern: (regex: RegExp, message: string): ValidationRule => ({
    type: 'pattern',
    value: regex,
    message,
  }),
};




