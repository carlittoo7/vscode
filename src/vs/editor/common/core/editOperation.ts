/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import {Range} from 'vs/editor/common/core/range';
import {IEditorRange, IIdentifiedSingleEditOperation} from 'vs/editor/common/editorCommon';
import {Position} from 'vs/editor/common/core/position';

export class EditOperation {

	public static insert(position:Position, text:string): IIdentifiedSingleEditOperation {
		return {
			identifier: null,
			range: new Range(position.lineNumber, position.column, position.lineNumber, position.column),
			text: text,
			forceMoveMarkers: true
		};
	}

	public static delete(range:IEditorRange): IIdentifiedSingleEditOperation {
		return {
			identifier: null,
			range: range,
			text: null,
			forceMoveMarkers: true
		};
	}

	public static replace(range:IEditorRange, text:string): IIdentifiedSingleEditOperation {
		return {
			identifier: null,
			range: range,
			text: text,
			forceMoveMarkers: false
		};
	}

	public static replaceMove(range:IEditorRange, text:string): IIdentifiedSingleEditOperation {
		return {
			identifier: null,
			range: range,
			text: text,
			forceMoveMarkers: true
		};
	}
}