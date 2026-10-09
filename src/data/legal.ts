export type LegalBlock = { type: "h2" | "h3" | "p"; text: string } | { type: "list"; items: string[] };
export type LegalDocument = {
  title: string;
  blocks: LegalBlock[];
  lang?: string;
  updated?: { label: string; dateTime: string; text: string };
};

export const privacyPolicy: LegalDocument = {
  title: "Integritetspolicy",
  lang: "sv",
  updated: { label: "Senast uppdaterad:", dateTime: "2026-10-07", text: "7 oktober 2026" },
  blocks: [
    { type: "p", text: "Här beskriver vi hur Moderna Sidor hanterar dina uppgifter när du besöker webbplatsen eller hör av dig till oss. Har du frågor är du alltid välkommen att ta kontakt." },
    { type: "h2", text: "När du kontaktar oss" },
    { type: "p", text: "Vi använder de uppgifter du lämnar, som namn, e-postadress, företagsnamn och information om ditt ärende, för att svara och följa upp vår dialog. Det bygger på vårt berättigade intresse av att hantera förfrågningar och ha kontakt med kunder och samarbetspartner. Du väljer vad du delar, men vi behöver ett sätt att nå dig för att kunna svara." },
    { type: "h2", text: "Cookies och besöksstatistik" },
    { type: "p", text: "Vi planerar att använda cookies och besöksstatistik för att förstå hur webbplatsen används och göra innehållet mer relevant och lätt att hitta. Cookies är små filer som sparas i din webbläsare. Statistik kan exempelvis visa vilka sidor som besöks och hur besökare hittar hit." },
    { type: "p", text: "Innan verktygen tas i bruk informerar vi om vilka uppgifter som samlas in, vilka leverantörer som används och hur länge uppgifterna sparas. Cookies för statistik och marknadsföring används först efter ditt samtycke. Du ska kunna tacka nej och ändra ditt val. Nödvändiga cookies, som behövs för en funktion du själv använder, kräver inte samtycke." },
    { type: "h2", text: "Drift och lagring" },
    { type: "p", text: "Meddelanden från kontaktformuläret skickas med e-posttjänsten Resend till vår inkorg. Namn, e-postadress och meddelande lämnas till tjänsten för att genomföra leveransen." },
    { type: "p", text: "Leverantörer av drift och e-post kan behöva behandla uppgifter för att hjälpa oss med webbplatsen och vår kommunikation. Teknisk information, som IP-adress och webbläsare, används för att visa webbplatsen och hålla den säker. Det bygger på vårt berättigade intresse av en fungerande och säker webbplats." },
    { type: "p", text: "Vi sparar uppgifter så länge de behövs för att hantera ditt ärende och den fortsatta dialogen. Vissa uppgifter kan behöva sparas längre för att uppfylla ett avtal eller en skyldighet enligt lag." },
    { type: "h2", text: "Dina rättigheter" },
    { type: "p", text: "Du kan be om tillgång till dina uppgifter och begära rättelse, radering eller begränsad användning. Du kan också invända mot behandling som bygger på berättigat intresse och i vissa fall få ut uppgifter för att flytta dem till en annan tjänst. Ett samtycke kan återkallas när som helst. Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY)." },
    { type: "h2", text: "Frågor om dina uppgifter?" },
    { type: "p", text: "Moderna Sidor ansvarar för den behandling som beskrivs här. Skriv till business@modernasidor.se så hjälper vi dig. Vi uppdaterar den här sidan när vår hantering förändras." },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Allmänna villkor",
  lang: "sv",
  updated: { label: "Senast uppdaterad:", dateTime: "2026-10-07", text: "7 oktober 2026" },
  blocks: [
    { type: "p", text: "Här beskriver vi de övergripande villkoren för Moderna Sidors tjänster till företag och organisationer. De omfattar rådgivning, teknisk utveckling och relaterade tjänster, från avgränsade uppdrag till löpande samarbeten." },
    { type: "h2", text: "Avtal och tillämpning" },
    { type: "p", text: "Dessa villkor gäller när de har hänvisats till och godtagits som en del av ett avtal mellan parterna. Uppdragets parter, omfattning och särskilda förutsättningar ska framgå av avtalet eller den godkända offerten. Särskilt överenskomna villkor har företräde framför denna generella text. Informationen på webbplatsen är en presentation av våra tjänster och utgör inte i sig en offert." },
    { type: "h2", text: "Uppdragets omfattning" },
    { type: "p", text: "Inför ett uppdrag kommer parterna överens om vad som ska genomföras, vilka leveranser som ingår och hur arbetet ska följas upp. Tidsplan, prioriteringar och ansvarsfördelning utformas efter uppdragets förutsättningar. Om behoven förändras stämmer parterna av konsekvenserna för omfattning, tid och kostnad innan ändringen genomförs." },
    { type: "h2", text: "Samarbete och medverkan" },
    { type: "p", text: "Ett fungerande genomförande förutsätter att parterna lämnar relevanta underlag, fattar nödvändiga beslut och informerar varandra om omständigheter som påverkar uppdraget. Kunden ansvarar för att material, information och åtkomst som lämnas får användas för det avtalade ändamålet. Förseningar eller ändrade förutsättningar hanteras genom dialog och dokumenterad avstämning." },
    { type: "h2", text: "Ersättning och betalning" },
    { type: "p", text: "Priser, ersättningsmodell, fakturering och betalningsvillkor bestäms i respektive avtal. Där anges även hur eventuella löpande kostnader och externa tjänster ska hanteras. Arbete utanför den överenskomna omfattningen kräver en separat överenskommelse om innehåll och ersättning." },
    { type: "h2", text: "Rättigheter och användning" },
    { type: "p", text: "Äganderätt och nyttjanderätt till det som utvecklas regleras i uppdragsavtalet. Material som en part tillhandahåller och befintliga verktyg eller komponenter omfattas inte av någon överlåtelse enbart genom att användas i uppdraget. Programvara, innehåll och andra resurser från tredje part kan omfattas av egna licensvillkor, som behöver beaktas vid leverans och fortsatt användning." },
    { type: "h2", text: "Sekretess och personuppgifter" },
    { type: "p", text: "Parterna ska hantera konfidentiell information med omsorg och endast använda den för uppdragets genomförande. Tillgång begränsas till de personer som behöver informationen och som omfattas av motsvarande sekretess. Detta hindrar inte utlämnande som krävs enligt lag eller myndighetsbeslut och omfattar inte information som redan är allmänt tillgänglig utan brott mot sekretessen." },
    { type: "p", text: "När ett uppdrag innebär behandling av personuppgifter klargör parterna sina respektive roller och skyldigheter. Om vi behandlar personuppgifter för kundens räkning som personuppgiftsbiträde ska behandlingen regleras i ett personuppgiftsbiträdesavtal innan den påbörjas. Hantering av uppgifter vid besök på webbplatsen och förfrågningar beskrivs i vår integritetspolicy." },
    { type: "h2", text: "Externa tjänster och beroenden" },
    { type: "p", text: "En lösning kan vara beroende av kundens befintliga miljö eller tjänster från andra leverantörer. Ansvar för konton, licenser, åtkomst och eventuella kostnader tydliggörs inom uppdraget. Om ett externt beroende förändras bedömer parterna hur det påverkar leveransen och behovet av anpassningar." },
    { type: "h2", text: "Leverans, kvalitet och ansvar" },
    { type: "p", text: "Leveranser bedöms mot de krav och förutsättningar som parterna har kommit överens om. Former för granskning, godkännande och hantering av fel preciseras i avtalet. Detsamma gäller eventuell garanti, support, drift och fortsatt förvaltning. Parternas ansvar regleras av uppdragsavtalet och tillämplig lag. Frågor eller avvikelser ska tas upp med den ansvariga kontaktpersonen så att de kan utredas och hanteras." },
    { type: "h2", text: "Avtalstid och avslut" },
    { type: "p", text: "Avtalstid och förutsättningar för uppsägning eller annat avslut anges i respektive avtal. Vid ett avslut klargör parterna hur pågående arbete, ekonomisk reglering och eventuell överlämning ska hanteras. Material, behörigheter och personuppgifter hanteras enligt avtalade rättigheter, tillämpliga dataskyddsvillkor och lagkrav." },
    { type: "h2", text: "Uppdateringar och kontakt" },
    { type: "p", text: "Vi kan uppdatera denna sida när tjänsterna eller förutsättningarna för våra uppdrag förändras. Datumet ovan visar när texten senast uppdaterades. En ny publicerad version ändrar inte automatiskt villkoren i ett redan ingånget avtal." },
    { type: "p", text: "Har ni frågor om villkoren eller ett planerat uppdrag är ni välkomna att kontakta Moderna Sidor på business@modernasidor.se." },
  ],
};
