
import { writeJsonFile } from "write-json-file";
import { toDo } from "./toDoData.js";
import { nevergonnado } from "./toDoData.js";

await writeJsonFile('nevergonnado.json', nevergonnado);
await writeJsonFile('toDo.json', toDo);
import (writeJsonFile)



