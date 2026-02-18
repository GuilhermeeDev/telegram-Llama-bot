import {fileURLToPath} from "url";
import {getLlama, LlamaChatSession} from "node-llama-cpp";
import path from "path";

async function processQuestion(question: string) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const llama = await getLlama();
    const model = await llama.loadModel({
    modelPath: path.join(__dirname, "models", "Llama-3.2-1B-Instruct.Q4_K_M.gguf")});
    const context = await model.createContext();
    const session = new LlamaChatSession({contextSequence: context.getSequence()});
    const resul = await session.prompt(question);
    return resul;
}

export {processQuestion}