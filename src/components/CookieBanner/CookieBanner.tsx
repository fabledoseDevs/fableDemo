import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import {
  BannerBody,
  ButtonPositioner,
  ContentContainer,
  TextField,
} from '@/components/CookieBanner/CookieBanner.styled';
import Button from '@/componentsButton';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import type { CookieBanner as CookieBannerType } from './CookieBanner.types';

export const CookieBanner: CookieBannerType = () => {
  const { setSettings } = useSettingsContext();

  const handleCookieConsent = (cookieConsent: boolean) => {
    setSettings(prevSettings => ({ ...prevSettings, cookieConsent }));
  };

  return (
    <BannerBody>
      <ContentContainer>
        <TextField>
          <h5>
            Czy przyniosłeś ciasteczka, aby umilić sobie spotkanie z bajkami?
          </h5>
          <p>
            My przynieśliśmy swoje, ale te nie nadają się do jedzenia. Nasze
            ciasteczka to niewielkie pliki, które zapisujemy na Twoim
            urządzeniu, aby móc dostarczyć Ci usługę w najlepszej jakości.
            <br />
            Zapisujemy w nich informacje o ustawieniach aplikacji, jakie zostały
            przez ciebie wybrane. Jeżeli nie wyrażasz na to zgody, opuść tę
            stronę. Jeśli chciałbyś dowiedzeć się więcej, skontaktuj się z nami.
          </p>
        </TextField>
        <ButtonPositioner>
          <Button
            label={'OK'}
            colorVariant={COLOR_VARIANTS.WHITE}
            fontVariant={FONT_VARIANTS.UPPERCASE}
            purpose={PURPOSE.FUNCTION_TRIGGER}
            onclickAction={() => handleCookieConsent(true)}
          />
        </ButtonPositioner>
      </ContentContainer>
    </BannerBody>
  );
};
