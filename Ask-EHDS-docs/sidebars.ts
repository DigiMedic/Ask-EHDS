import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Úvod',
      items: ['co_potrebujete_vedet_o_ehds'],
    },
    {
      type: 'category',
      label: 'EHDS v praxi',
      items: [
        'podpora_pokroku_ve_zdravotnictvi',
        'technicke_aspekty_ehds',
        'bezpecnost_a_ochrana_dat_v_ehds',
      ],
    },
    {
      type: 'category',
      label: 'EHDS v České republice',
      items: [
        'implementace_ehds_v_cr',
        'ehds_a_ceske_zdravotnictvi',
      ],
    },
  ],
};

export default sidebars;