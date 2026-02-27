
# Ajustes Visuais para Identidade com o Site Original

## Diferenças Identificadas (baseado nos screenshots)

### 1. Hero - Texto "ELO STUDIO"
- **Atual**: Usa classe `gradient-accent` (verde/teal)
- **Original**: "ELO" em branco bold + "STUDIO" em roxo/gradient purple
- **Correção**: Trocar para "ELO" branco + "STUDIO" com `gradient-text` (roxo)

### 2. Hero - Degradê do "Lotam Sua Agenda"
- **Atual**: Degradê roxo-para-rosa (`gradient-text`: 270 -> 300)
- **Original**: Degradê roxo-para-vermelho/laranja mais vibrante
- **Correção**: Ajustar `gradient-text` no CSS para ir de roxo para um tom mais avermelhado/alaranjado

### 3. Hero - Subtítulo "— com Google e Meta Ads"
- **Atual**: `text-muted-foreground` (cinza apagado) com tamanho menor
- **Original**: Texto branco/claro, tamanho maior, mais destaque
- **Correção**: Usar `text-foreground` e tamanho maior

### 4. Seção Pacotes - Preços
- **Atual**: Preços com `gradient-text` (roxo/rosa)
- **Original**: Preços em branco/foreground, sem gradiente
- **Correção**: Trocar para `text-foreground font-bold`

### 5. Seção Pacotes - Ícones no topo dos cards
- **Atual**: Sem ícones decorativos nos cards
- **Original**: Cada card tem um ícone decorativo roxo no topo (Zap, TrendingUp, Crown)
- **Correção**: Adicionar ícones lucide correspondentes

### 6. Seção Pacotes - Layout dos preços
- **Atual**: Preço e "verba sugerida" juntos
- **Original**: Preço grande + "/mês" menor ao lado, verba sugerida separada abaixo
- **Correção**: Separar preço e sufixo "/mês", reorganizar layout

### 7. Seção Pacotes - Título "Nossos Pacotes"
- **Atual**: Todo em branco
- **Original**: "Nossos" em branco + "Pacotes" em `gradient-text`
- **Correção**: Aplicar gradiente na palavra "Pacotes"

### 8. Rodapé
- **Atual**: Apenas copyright simples
- **Original**: Inclui logo "ELO STUDIO", descrição, telefone, email e copyright
- **Correção**: Adicionar todas as informações, usando o número `(11) 96634-2625` e `agenciaelostudio@gmail.com`

## Arquivos a Modificar

1. **`src/index.css`** - Ajustar gradiente do `gradient-text` para roxo->vermelho
2. **`src/components/Hero.tsx`** - Corrigir "ELO STUDIO" e subtítulo
3. **`src/components/Pricing.tsx`** - Adicionar ícones, corrigir cores dos preços, título com gradiente
4. **`src/components/Footer.tsx`** - Adicionar informações completas do rodapé
