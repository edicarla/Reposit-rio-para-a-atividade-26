//importando função utilitária de guardar tempo(delay)
import { aguardar } from "../../utils/helpers";
//simulando uma api de login
function simularLogin(usuario: string, senha: string): Promise<string>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === "admin" && senha === "123456") {
        resolve("Login bem-sucedido!");
      } else {
        reject("Credenciais inválidas.");
      }
    }, 2000);
  });
}
//função principail testando com async/await
async function executarCT() {
    console.log("Iniciando teste de login...");
    try {
        console.log("Aguardando resultado do login...");
        await aguardar(2000); //aguardando 2 segundos
        console.log('inserindo credenciais...');
        await aguardar(3000); //aguardando 3 segundo
        const token = await simularLogin('admin', '123456');
    console.log(`token: ${token}`);
    } catch (erro) {
        console.error(`Falha no teste: ${erro}`);
    }finally{
        console.log("Teste de login finalizado.");
    }

}

executarCT();