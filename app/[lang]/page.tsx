import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { ContactList } from '@/components/ContactList';
import { BusinessLink } from '@/components/ui/BusinessLink';
import { SideMenu } from '@/components/SideMenu';
import { Logo } from '@/components/ui/Logo';
import { ExampleSection } from '@/sections/home/ExampleSection';
import { TranslationSwitcher } from '@/components/TranslationSwitcher';
import { AboutSection } from '@/sections/home/AboutSection';
import { CatalogSection } from '@/sections/home/CatalogSection';

import { CATALOG } from '@/data/links';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { common, homepage } = await getDictionary(lang);

  const { header, footer } = common;
  const { language, sidePanelMenu, nav, logoAriaLabelText } = header;
  const { closePanelBtnAriaText, openPanelBtnAriaText } = sidePanelMenu;
  const { contacts } = footer;

  const { catalog, about } = homepage;

  return (
    <main>
      <CatalogSection {...catalog} />

      <ExampleSection />

      {/* Examples using translations */}

      <div className="container mt-10 flex flex-col gap-10">
        <TranslationSwitcher lang={language} />

        <ContactList contacts={contacts} className="font-montserrat" />
        <AboutSection about={about} />
        <BusinessLink isIcon={true} text={header.forBusinesBtnText} />
        <BusinessLink
          className="text-lg"
          isIcon={true}
          text={header.forBusinesBtnText}
        />
        <BusinessLink isIcon={false} text={footer.forBusinesBtnText} />

        <div className="flex items-center justify-between">
          <SideMenu
            btnAriaClose={closePanelBtnAriaText}
            btnAriaOpen={openPanelBtnAriaText}
            links={nav}
          />
          <Logo aria={logoAriaLabelText} position="header" />
        </div>
      </div>

      <div id={CATALOG} className="w-74 h-74 mt-[500px]">
        Scroll test
      </div>
    </main>
  );
}
