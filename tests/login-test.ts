
//importando depencias
import { test, expect,vi } from 'vitest';
//simulando login lento

 function loginlento(usuario: string): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Login bem-sucedido para o usuário: ${usuario}`);
            }, 5000);
        });
    }           


test( `Simular login usando fake timers`, async () => {
    //ativando fake timers
    vi.useFakeTimers();
    console.log("Iniciando teste de login...");

    //chamando promisse de usuario sem await ainda
    const loginPromise = loginlento("Dona Redonda");

    //configuraçao de avanso de tempo para 5 segundos
    vi.advanceTimersByTime(5000);

    //aguardando a promisse ser resolvida
    const resultado = await loginPromise;   

    //verificando se o resultado é o esperado
    expect(resultado).toBe("Login bem-sucedido para o usuário: Dona Redonda");
    console.log("Teste de login concluído com sucesso!");

    //desativando fake timers
    vi.useRealTimers();
    
})