

export const convertFormData = (data:  Record<string, any>) => {
    const formData = new FormData();
  
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'string' || value instanceof Blob) {
        formData.append(key, value);
      } else if (value instanceof File) {
        formData.append(key, value);
      } else if (value instanceof HTMLInputElement && value.type === 'file' && value.files?.[0]) {
        formData.append(key, value.files[0]);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    });
  
    return formData;
  };
  