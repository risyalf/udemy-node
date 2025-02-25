async function  samplePromise()
{
    setTimeout(() => {
        return Promise.resolve("Eko")
    }, 1000);
}

const name = await samplePromise();
console.info(name)