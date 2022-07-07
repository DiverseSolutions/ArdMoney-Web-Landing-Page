import { Trans, useTranslation } from "react-i18next";
import { Element } from "react-scroll";

export default function ArdMoneyFeaturesSection() {
  const { t, i18n } = useTranslation();
  const liStyle = `w-9/12 sm:w-5/12 h-44`;
  const cardTitleStyle = `text-2xl text-left font-semibold mb-4 sm:mb-6`;
  const cardSubStyle = `font-light mb-12 sm:mb-0 text-left text-xs uppercase w-full sm:w-11/12 2xl:w-9/12`;

  return (
    <Element
      class='ardMoney-features-bg w-full py-16 flex flex-col items-center'
      name='features'
    >
      <h1 class='text-center font-bold text-3xl sm:text-4xl mb-12'>
        {t("four_pillars_of_ardMoney")}
      </h1>

      <ul class='flex flex-col items-center sm:flex-row w-full sm:w-10/12 2xl:w-8/12 justify-between'>
        <li class={liStyle}>
          <h2 class={cardTitleStyle}>{t("dynamic_fees")}</h2>
          <p class={cardSubStyle}>{t("the_dao_is_able")}</p>
        </li>

        <li class={liStyle}>
          <h2 class={cardTitleStyle}>{t("multichain")}</h2>
          <p class={cardSubStyle}>{t("users_will_be_able")}</p>
        </li>

        <li class={liStyle}>
          <h2 class={cardTitleStyle}>{t("permissionless")}</h2>
          <p class={cardSubStyle}>{t("ardMoney_will_serve")}</p>
        </li>

        <li class={liStyle}>
          <h2 class={cardTitleStyle}>{t("decentralized")}</h2>
          <p class={cardSubStyle}>{t("ardMoney_is_governed")}</p>
        </li>
      </ul>
    </Element>
  );
}
