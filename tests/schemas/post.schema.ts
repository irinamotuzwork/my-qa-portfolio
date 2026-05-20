export function validatePostSchema(data: any) {
    const isValid =
    Array.isArray(data) && 
    data.every((post) => 
        typeof post.id === 'number' &&
        typeof post.title === 'string' &&
        typeof post.slug === 'string' &&
        typeof post.excerpt === 'string' &&
        typeof post.content === 'string'
    );

    return {
        success: isValid,
    };
}