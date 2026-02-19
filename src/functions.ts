import {getLlama, LlamaChatSession} from "node-llama-cpp";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

async function processQuestion(question: string) {
    const llama = await getLlama();
    const model = await llama.loadModel({modelPath: path.resolve(process.env.MODEL_PATH!)});
    const context = await model.createContext();
    const session = new LlamaChatSession({contextSequence: context.getSequence()});
    const result = await session.prompt(question);
    return result;
}

export {processQuestion}