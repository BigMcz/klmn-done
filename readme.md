# Nubium JS sandbox - Michal Matúš

Do vyhledávacího pole se bude vkládat slug složky, která se poté bude vyhledávat pomocí Ulož.to API.
Dotaz na API se bude odesílat po stisknutí tlačítka "vyhledat".
V případě že složka existuje zobrazte uživateli routu s detailem složky.
V opačném případě zobrazte hlášku že se složku nepodařilo najít.
Na detailu složky vypiště její název s odkazem na Ulož.to a seznam všech přímých potomků vnořených složek.
Pro každou složku v seznamu udělejte proklik na detail.
Seznam složek by měl jít pomocí dalšího inputu filtrovat dle názvu.
Filtr je součástí komponenty pro detail složky a tlačítko zpět v prohlížeči na něj nemá vliv.

* Znázorněte, že na API probíhá dotaz (stačí textově).
* Aplikace musí podporovat tlačítko zpět v prohlížeči pro přecházení mezi detailem složek
* V celé aplikaci se vyhněte opětovnému načtení aplikace způsobené přesměrováním.
* Spuštění lintu (příkaz `yarn lint`) musí projít bez chyb.

Dokumentace Ulož.to API je dostupná na odkaze [https://uloz.to/apidoc/public](https://uloz.to/apidoc/public).
Použijte `Public view` endpointy a pro hlavičku `X-Auth-Token` hodnotu `;HG%7jW6@6/8vx">R;f(`.
Do hosts souboru si přidejte řádek `127.0.0.1 js-dev-server` a aplikaci vyvíjejte na této doméně (CORS).
Pro vývoj aplikace můžete použít složku se slugem `tJlhmPfR7M7k` ([náhled složky](https://uloz.to/folder/tJlhmPfR7M7k/name/Nubium-JS-sandbox)).
