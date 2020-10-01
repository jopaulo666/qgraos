export class AppConstants {
	
	public static get baseServidor(): string {return "http://localhost:8080/"} // em produção, seria o servidor de hospedagem

	public static get baseLogin(): string {return this.baseServidor + "spring-rest-api/login"} // conxtesto do projeto

	public static get baseUrl(): string {return this.baseServidor + "spring-rest-api/usuario/"}
}
