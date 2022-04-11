


export function useService() {
    const files = import.meta.globEager("/src/core/*.ts");
    console.log('files',files);
}