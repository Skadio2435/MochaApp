async function TO(promise: Promise<any>): Promise<[any, any]> {
    try {
        const result = await promise;

        return [null, result];
    } catch (error) {
        return [error, null];
    }
}

export default TO;
