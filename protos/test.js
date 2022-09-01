// @generated by protobuf-ts 2.8.0 with parameter output_javascript
// @generated from protobuf file "test.proto" (package "testpb", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class asd$Type extends MessageType {
    constructor() {
        super("testpb.asd", [
            { no: 1, name: "test_string", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "test_int", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "test_bool", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { testString: "", testInt: 0, testBool: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string test_string */ 1:
                    message.testString = reader.string();
                    break;
                case /* int32 test_int */ 2:
                    message.testInt = reader.int32();
                    break;
                case /* bool test_bool */ 3:
                    message.testBool = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string test_string = 1; */
        if (message.testString !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.testString);
        /* int32 test_int = 2; */
        if (message.testInt !== 0)
            writer.tag(2, WireType.Varint).int32(message.testInt);
        /* bool test_bool = 3; */
        if (message.testBool !== false)
            writer.tag(3, WireType.Varint).bool(message.testBool);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message testpb.asd
 */
export const asd = new asd$Type();
