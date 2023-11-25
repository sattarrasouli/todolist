
interface LoginFormData {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

export const loginUser = async (data: LoginFormData): Promise<LoginResponse> => {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const responseData: LoginResponse = await response.json();

    localStorage.setItem('accessToken', responseData.token);

    return responseData;
};
