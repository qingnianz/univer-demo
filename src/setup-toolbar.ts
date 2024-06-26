import type { FUniver } from '@univerjs/facade'
import {
  setupClearStyles,
  setupCommandsListenerSwitch,
  setupCreateSheet,
  setupDisposeUnit,
  setupEditSwitch,
  setupGetA1CellData,
  setupGetSheetData,
  setupGetValue,
  setupGetWorkbookData,
  setupRedo,
  setupScrollToBottom,
  setupScrollToCell,
  setupScrollToTop,
  setupSetBackground,
  setupSetSelection,
  setupSetValue,
  setupSetValues,
  setupUndo
} from './api'

export function setupToolbar(univerAPI: FUniver) {
  const $toolbar = document.getElementById('toolbar')!

  setupSetValue($toolbar, univerAPI)
  setupSetValues($toolbar, univerAPI)
  setupGetValue($toolbar, univerAPI)
  setupGetA1CellData($toolbar, univerAPI)

  setupGetWorkbookData($toolbar, univerAPI)
  setupGetSheetData($toolbar, univerAPI)
  setupCreateSheet($toolbar, univerAPI)

  setupScrollToCell($toolbar, univerAPI)
  setupScrollToTop($toolbar, univerAPI)
  setupScrollToBottom($toolbar, univerAPI)

  setupSetBackground($toolbar, univerAPI)

  setupCommandsListenerSwitch($toolbar, univerAPI)
  setupDisposeUnit($toolbar, univerAPI)
  setupEditSwitch($toolbar, univerAPI)

  setupUndo($toolbar, univerAPI)
  setupRedo($toolbar, univerAPI)

  setupSetSelection($toolbar, univerAPI)
  setupClearStyles($toolbar, univerAPI)
}
