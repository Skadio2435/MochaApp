async function TO(p: Promise<any>) {
    try {
        const result = await p;
        return [null, result];
    } catch (error) {
        return [error, null];
    }
}

export default TO;
