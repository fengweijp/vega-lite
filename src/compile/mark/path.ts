import {X, Y, SHAPE, SIZE} from '../../channel';
import {Config} from '../../config';
import {ChannelDefWithLegend, FieldDef, field} from '../../fielddef';
import {Scale} from '../../scale';
import {VgValueRef} from '../../vega.schema';
import {GEOJSON} from '../../type';

import {applyColorAndOpacity} from '../common';
import {UnitModel} from '../unit';


export namespace path {
  export function markType() {
    return 'path';
  }

  export function properties(model: UnitModel, fixedShape?: string) {
    // TODO Use Vega's marks properties interface
    let p: any = {};
    const config = model.config();

    p.path = path(model.encoding().geopath);

    applyColorAndOpacity(p, model);
    return p;
  }

  function path(fieldDef: FieldDef) {
    if (fieldDef && fieldDef.type === GEOJSON) {
      return { field: "layout_path" }
    }
    return undefined;
  }
}