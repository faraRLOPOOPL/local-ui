import { forwardRef } from 'react';
import { AllCommunityModule, ModuleRegistry, themeQuartz, iconSetAlpine } from "ag-grid-community";
import { AgGridReact, type AgGridReactProps } from 'ag-grid-react';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import { AG_GRID_LOCALE_RU } from './locales/ru';

interface DataTableProps extends AgGridReactProps {
  locale?: 'ru' | 'en';
}

const thene = themeQuartz
  .withParams({
    spacing: 12,
    fontFamily: "var(--rl-font)",
    headerBackgroundColor: "var(--rl-color-neutral-05)",
    headerTextColor: "var(--rl-color-neutral-70)",
    headerFontSize: "var(--rl-font-size-text2-s)",
    headerFontWeight: 500,
    headerHeight: 40,
  })
  .withPart(iconSetAlpine)

ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

export const DataTable = forwardRef<AgGridReact, DataTableProps>(({ locale = 'ru', ...props }, ref) => {

  const localeText = locale === 'ru' ? AG_GRID_LOCALE_RU : undefined;

  return (
    <AgGridReact
      theme={thene}
      ref={ref}
      localeText={localeText}
      {...props}
    />
  )
});
