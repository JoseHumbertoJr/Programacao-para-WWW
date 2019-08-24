import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Main {

    public static void main(String[] args) throws IOException {
    	
    	try {
	        int porta = 8080;
	        ServerSocket servidor = new ServerSocket(porta);
	        System.out.println("Servidor conectado na porta : " + porta);
	
	        while (true) {
	
	            Socket cliente = servidor.accept();
	            System.out.println("Nova conexão com o cliente " +cliente.getInetAddress().getHostAddress());
	            BufferedReader entrada = new BufferedReader(new InputStreamReader(cliente.getInputStream()));
	            BufferedWriter saida = new BufferedWriter(new OutputStreamWriter(cliente.getOutputStream()));
	
	            String s;
	            while ((s = entrada.readLine()) != null) {
	                System.out.println(s);
	                if (s.isEmpty()) {
	                    break;
	                }
	            }
	
	            saida.write("HTTP/1.1 200 OK\r\n");
		    	saida.write("Server: Apache/2.2.14 (Win32)\r\n");
	            String  mensagem = "<html><body><h1>Ola mundo!</h1></body></html>";
	            saida.write("Content-Length: " + mensagem.getBytes().length + "\r\n");
	            saida.write("Content-Type: text/html; charset=utf-8\r\n");
		    	saida.write("Connection: Closed\r\n");
	            saida.write("\r\n");
	            saida.write(mensagem);
	
	            System.out.println("Cliente desconectado!");
	            saida.close();
	            entrada.close();
	            cliente.close();
	            servidor.close();
	        }
    	}
    	catch(Exception e) {
    		System.out.println("Erro: " + e.getMessage());
    	}
    }
}