module.exports = xml = `
<?xml version="1.0" encoding="utf-8"?>
<CompNfse   xmlns="http://www.abrasf.org.br/nfse.xsd">
  <Nfse versao="2.01">
    <InfNfse>
      <Numero>4446225</Numero>
      <CodigoVerificacao>H3PUW3G0C</CodigoVerificacao>
      <DataEmissao>2023-07-13T11:51:12</DataEmissao>
      <ValoresNfse>
        <BaseCalculo>30.80</BaseCalculo>
        <Aliquota>3.00</Aliquota>
        <ValorIss>0.92</ValorIss>
        <ValorLiquidoNfse>110.00</ValorLiquidoNfse>
      </ValoresNfse>
      <ValorCredito>0.00</ValorCredito>
      <PrestadorServico>
        <IdentificacaoPrestador>
          <CpfCnpj>
            <Cnpj>76767219000182</Cnpj>
          </CpfCnpj>
          <InscricaoMunicipal>26052</InscricaoMunicipal>
        </IdentificacaoPrestador>
        <RazaoSocial>UNIMED REGIONAL MARINGÁ - COOPERATIVA DE TRABALHO MÉDICO</RazaoSocial>
        <Endereco>
          <Endereco>AV. TIRADENTES</Endereco>
          <Numero>1008</Numero>
          <Complemento>LOJA 05 E 06 - LT 09/10</Complemento>
          <Bairro>ZONA 01</Bairro>
          <CodigoMunicipio>4115200</CodigoMunicipio>
          <Uf>PR</Uf>
          <Cep>87013260</Cep>
        </Endereco>
        <Contato>
          <Telefone>4432212795</Telefone>
          <Email>suprimentos@unimedmaringa.com.br</Email>
        </Contato>
      </PrestadorServico>
      <OrgaoGerador>
        <CodigoMunicipio>4115200</CodigoMunicipio>
        <Uf>PR</Uf>
      </OrgaoGerador>
      <DeclaracaoPrestacaoServico>
        <InfDeclaracaoPrestacaoServico>
          <Rps>
            <IdentificacaoRps>
              <Numero>4446202</Numero>
              <Serie>A</Serie>
              <Tipo>1</Tipo>
            </IdentificacaoRps>
            <DataEmissao>2023-07-13</DataEmissao>
            <Status>1</Status>
          </Rps>
          <Competencia>2023-07-13</Competencia>
          <Servico>
            <Valores>
              <ValorServicos>110.00</ValorServicos>
              <ValorDeducoes>79.20</ValorDeducoes>
              <ValorPis>0.00</ValorPis>
              <ValorCofins>0.00</ValorCofins>
              <ValorInss>0.00</ValorInss>
              <ValorIr>0.00</ValorIr>
              <ValorCsll>0.00</ValorCsll>
              <OutrasRetencoes>0.00</OutrasRetencoes>
              <ValorIss>0.92</ValorIss>
              <Aliquota>3.00</Aliquota>
              <DescontoIncondicionado>0.00</DescontoIncondicionado>
              <DescontoCondicionado>0.00</DescontoCondicionado>
            </Valores>
            <IssRetido>2</IssRetido>
            <ItemListaServico>0423</ItemListaServico>
            <CodigoCnae>0</CodigoCnae>
            <CodigoTributacaoMunicipio>04.23</CodigoTributacaoMunicipio>
            <Discriminacao>Contrato: 68892\nNumero do titulo:/Data de Vencimento: 15/08/23\n  Servicos PrestadosValor Total: R$ 110,00\nBase IR (cod retencao 3280) : R$110,00\n\n\n\n\n\n\n\nEm atencao a Lei 12.741/2012, informamos que o valor do seu plano de saude possui aproximadamente 3% de ISSQN, 4% Cofins e 0,65% de PIS.</Discriminacao>
            <CodigoMunicipio>4115200</CodigoMunicipio>
            <ExigibilidadeISS>1</ExigibilidadeISS>
            <MunicipioIncidencia>4115200</MunicipioIncidencia>
          </Servico>
          <Prestador>
            <CpfCnpj>
              <Cnpj>76767219000182</Cnpj>
            </CpfCnpj>
            <InscricaoMunicipal>26052</InscricaoMunicipal>
          </Prestador>
          <Tomador>
            <IdentificacaoTomador>
              <CpfCnpj>
                <Cnpj>123</Cnpj>
              </CpfCnpj>
              <InscricaoMunicipal>00000158996</InscricaoMunicipal>
            </IdentificacaoTomador>
            <RazaoSocial>Empresa Teste 123 Ltda</RazaoSocial>
            <Endereco>
              <Endereco>Rua do Bairro Legal</Endereco>
              <Numero>123</Numero>
              <Complemento>Casa</Complemento>
              <Bairro>Bairro Legal</Bairro>
              <CodigoMunicipio>4115200</CodigoMunicipio>
              <Uf>PR</Uf>
              <Cep>87080000</Cep>
            </Endereco>
            <Contato>
              <Telefone>449991212312</Telefone>
              <Email>email@email.com</Email>
            </Contato>
          </Tomador>
          <OptanteSimplesNacional>2</OptanteSimplesNacional>
          <IncentivoFiscal>2</IncentivoFiscal>
        </InfDeclaracaoPrestacaoServico>
      </DeclaracaoPrestacaoServico>
    </InfNfse>
  </Nfse>
</CompNfse>`;
