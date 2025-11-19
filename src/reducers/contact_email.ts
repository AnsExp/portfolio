export async function sendContactEmail(email: string, subject: string, message: string) {
    const fetchResponse = await fetch('https://interislas.galapagos.click/wp-json/api_git_central/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            subject: subject,
            email: email
        }),
    });
    if (!fetchResponse.ok) {
        return false;
    }
    return true;
}