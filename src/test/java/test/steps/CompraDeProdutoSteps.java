package test.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class CompraDeProdutoSteps {
	WebDriver driver;

	@Before
	public void inicio() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Dado("que acesso a pagina principal")
	public void que_acesso_a_pagina_principal() {
		driver.get("https://www.americanas.com.br/");
	}

	@Quando("pesquiso o produto {string}")
	public void pesquiso_o_produto(String produto) {
		driver.findElement(By.id("h_search-input")).sendKeys(produto + Keys.ENTER);
	}

	@Entao("devo visualizar lista do produto")
	public void devo_visualizar_lista_do_produto() {
		WebElement validar = driver.findElement(By.className("page-title"));
		assertEquals("notebook inspiron i15-3583-a30p", validar.getText());
	}

	@Entao("devo visualizar mensagem {string}")
	public void devoVisualizarMensagem(String mensagem) {
		WebElement validar = driver.findElement(By.className("goIRTq"));
		boolean validarMsg = driver.getPageSource().contains(mensagem);
		assertEquals("Ops!", validar.getText());
		assertTrue(validarMsg);
	}

	@Quando("adiciono o produto ao carrinho")
	public void adiciono_o_produto_ao_carrinho() {
		driver.findElement(By.className("gYIWNc")).click();

		WebElement procurar = driver.findElement(By.id("btn-buy"));
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click()", procurar);

		driver.findElement(By.id("btn-continue")).click();
	}

	@Entao("devo visualizar produto adicionado")
	public void devo_visualizar_produto_adicionado() {
		boolean produto = driver
				.findElement(By.xpath(
						"//img[@src='https://images-americanas.b2w.io/produtos/01/00/img/134385/6/134385671G1.jpg\']"))
				.isDisplayed();
		assertTrue(produto);
	}

	@After(order = 1)
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/" + cenario.getName() + ".jpg"));
			driver.quit();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@After(order = 0)
	public void fecharBrownser() {
		driver.quit();
	}
}
