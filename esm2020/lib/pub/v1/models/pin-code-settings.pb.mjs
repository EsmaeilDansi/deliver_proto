import { BinaryReader, BinaryWriter } from 'google-protobuf';
/**
 * Message implementation for proto.pub.v1.models.PinCodeSettings
 */
export class PinCodeSettings {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PinCodeSettings to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isNeeded = _value.isNeeded;
        this.length = _value.length;
        this.isRepeatNeeded = _value.isRepeatNeeded;
        this.hint = _value.hint;
        this.isOutsideFirstRedirectionEnabled =
            _value.isOutsideFirstRedirectionEnabled;
        this.outsideFirstRedirectionAlert = _value.outsideFirstRedirectionAlert;
        this.outsideFirstRedirectionText = _value.outsideFirstRedirectionText;
        this.enableBiometric = _value.enableBiometric;
        PinCodeSettings.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PinCodeSettings();
        PinCodeSettings.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isNeeded = _instance.isNeeded || false;
        _instance.length = _instance.length || 0;
        _instance.isRepeatNeeded = _instance.isRepeatNeeded || false;
        _instance.hint = _instance.hint || '';
        _instance.isOutsideFirstRedirectionEnabled =
            _instance.isOutsideFirstRedirectionEnabled || false;
        _instance.outsideFirstRedirectionAlert =
            _instance.outsideFirstRedirectionAlert || '';
        _instance.outsideFirstRedirectionText =
            _instance.outsideFirstRedirectionText || '';
        _instance.enableBiometric = _instance.enableBiometric || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.isNeeded = _reader.readBool();
                    break;
                case 2:
                    _instance.length = _reader.readInt32();
                    break;
                case 4:
                    _instance.isRepeatNeeded = _reader.readBool();
                    break;
                case 5:
                    _instance.hint = _reader.readString();
                    break;
                case 6:
                    _instance.isOutsideFirstRedirectionEnabled = _reader.readBool();
                    break;
                case 7:
                    _instance.outsideFirstRedirectionAlert = _reader.readString();
                    break;
                case 8:
                    _instance.outsideFirstRedirectionText = _reader.readString();
                    break;
                case 9:
                    _instance.enableBiometric = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        PinCodeSettings.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isNeeded) {
            _writer.writeBool(1, _instance.isNeeded);
        }
        if (_instance.length) {
            _writer.writeInt32(2, _instance.length);
        }
        if (_instance.isRepeatNeeded) {
            _writer.writeBool(4, _instance.isRepeatNeeded);
        }
        if (_instance.hint) {
            _writer.writeString(5, _instance.hint);
        }
        if (_instance.isOutsideFirstRedirectionEnabled) {
            _writer.writeBool(6, _instance.isOutsideFirstRedirectionEnabled);
        }
        if (_instance.outsideFirstRedirectionAlert) {
            _writer.writeString(7, _instance.outsideFirstRedirectionAlert);
        }
        if (_instance.outsideFirstRedirectionText) {
            _writer.writeString(8, _instance.outsideFirstRedirectionText);
        }
        if (_instance.enableBiometric) {
            _writer.writeBool(9, _instance.enableBiometric);
        }
    }
    get isNeeded() {
        return this._isNeeded;
    }
    set isNeeded(value) {
        this._isNeeded = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    get isRepeatNeeded() {
        return this._isRepeatNeeded;
    }
    set isRepeatNeeded(value) {
        this._isRepeatNeeded = value;
    }
    get hint() {
        return this._hint;
    }
    set hint(value) {
        this._hint = value;
    }
    get isOutsideFirstRedirectionEnabled() {
        return this._isOutsideFirstRedirectionEnabled;
    }
    set isOutsideFirstRedirectionEnabled(value) {
        this._isOutsideFirstRedirectionEnabled = value;
    }
    get outsideFirstRedirectionAlert() {
        return this._outsideFirstRedirectionAlert;
    }
    set outsideFirstRedirectionAlert(value) {
        this._outsideFirstRedirectionAlert = value;
    }
    get outsideFirstRedirectionText() {
        return this._outsideFirstRedirectionText;
    }
    set outsideFirstRedirectionText(value) {
        this._outsideFirstRedirectionText = value;
    }
    get enableBiometric() {
        return this._enableBiometric;
    }
    set enableBiometric(value) {
        this._enableBiometric = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PinCodeSettings.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isNeeded: this.isNeeded,
            length: this.length,
            isRepeatNeeded: this.isRepeatNeeded,
            hint: this.hint,
            isOutsideFirstRedirectionEnabled: this.isOutsideFirstRedirectionEnabled,
            outsideFirstRedirectionAlert: this.outsideFirstRedirectionAlert,
            outsideFirstRedirectionText: this.outsideFirstRedirectionText,
            enableBiometric: this.enableBiometric
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            isNeeded: this.isNeeded,
            length: this.length,
            isRepeatNeeded: this.isRepeatNeeded,
            hint: this.hint,
            isOutsideFirstRedirectionEnabled: this.isOutsideFirstRedirectionEnabled,
            outsideFirstRedirectionAlert: this.outsideFirstRedirectionAlert,
            outsideFirstRedirectionText: this.outsideFirstRedirectionText,
            enableBiometric: this.enableBiometric
        };
    }
}
PinCodeSettings.id = 'proto.pub.v1.models.PinCodeSettings';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluLWNvZGUtc2V0dGluZ3MucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm90by9zcmMvbGliL3B1Yi92MS9tb2RlbHMvcGluLWNvZGUtc2V0dGluZ3MucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RTs7R0FFRztBQUNILE1BQU0sT0FBTyxlQUFlO0lBMkgxQjs7O09BR0c7SUFDSCxZQUFZLE1BQW1EO1FBQzdELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsZ0NBQWdDO1lBQ25DLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztRQUMxQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1FBQ3hFLElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMkJBQTJCLENBQUM7UUFDdEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXhJRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUN2QyxlQUFlLENBQUMsMkJBQTJCLENBQ3pDLFFBQVEsRUFDUixJQUFJLFlBQVks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TztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0M7WUFDdkUsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLDRCQUE0QjtZQUMvRCwyQkFBMkIsRUFBRSxJQUFJLENBQUMsMkJBQTJCO1lBQzdELGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLGdDQUFnQztZQUN2RSw0QkFBNEIsRUFBRSxJQUFJLENBQUMsNEJBQTRCO1lBQy9ELDJCQUEyQixFQUFFLElBQUksQ0FBQywyQkFBMkI7WUFDN0QsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQWhQTSxrQkFBRSxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlBpbkNvZGVTZXR0aW5nc1xuICovXG5leHBvcnQgY2xhc3MgUGluQ29kZVNldHRpbmdzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5QaW5Db2RlU2V0dGluZ3MnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQaW5Db2RlU2V0dGluZ3MoKTtcbiAgICBQaW5Db2RlU2V0dGluZ3MuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQaW5Db2RlU2V0dGluZ3MpIHtcbiAgICBfaW5zdGFuY2UuaXNOZWVkZWQgPSBfaW5zdGFuY2UuaXNOZWVkZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmxlbmd0aCA9IF9pbnN0YW5jZS5sZW5ndGggfHwgMDtcbiAgICBfaW5zdGFuY2UuaXNSZXBlYXROZWVkZWQgPSBfaW5zdGFuY2UuaXNSZXBlYXROZWVkZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmhpbnQgPSBfaW5zdGFuY2UuaGludCB8fCAnJztcbiAgICBfaW5zdGFuY2UuaXNPdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkVuYWJsZWQgPVxuICAgICAgX2luc3RhbmNlLmlzT3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25FbmFibGVkIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkFsZXJ0ID1cbiAgICAgIF9pbnN0YW5jZS5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkFsZXJ0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvblRleHQgPVxuICAgICAgX2luc3RhbmNlLm91dHNpZGVGaXJzdFJlZGlyZWN0aW9uVGV4dCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZW5hYmxlQmlvbWV0cmljID0gX2luc3RhbmNlLmVuYWJsZUJpb21ldHJpYyB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFBpbkNvZGVTZXR0aW5ncyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNOZWVkZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubGVuZ3RoID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5pc1JlcGVhdE5lZWRlZCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5oaW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNPdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkVuYWJsZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2Uub3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25BbGVydCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLm91dHNpZGVGaXJzdFJlZGlyZWN0aW9uVGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgX2luc3RhbmNlLmVuYWJsZUJpb21ldHJpYyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBpbkNvZGVTZXR0aW5ncy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFBpbkNvZGVTZXR0aW5ncyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pc05lZWRlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLmlzTmVlZGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyLCBfaW5zdGFuY2UubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pc1JlcGVhdE5lZWRlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLmlzUmVwZWF0TmVlZGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5oaW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5oaW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNiwgX2luc3RhbmNlLmlzT3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25FbmFibGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkFsZXJ0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDcsIF9pbnN0YW5jZS5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkFsZXJ0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvblRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOCwgX2luc3RhbmNlLm91dHNpZGVGaXJzdFJlZGlyZWN0aW9uVGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5hYmxlQmlvbWV0cmljKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg5LCBfaW5zdGFuY2UuZW5hYmxlQmlvbWV0cmljKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc05lZWRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2xlbmd0aD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXNSZXBlYXROZWVkZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9oaW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9pc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX291dHNpZGVGaXJzdFJlZGlyZWN0aW9uQWxlcnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX291dHNpZGVGaXJzdFJlZGlyZWN0aW9uVGV4dD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZW5hYmxlQmlvbWV0cmljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBpbkNvZGVTZXR0aW5ncyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQaW5Db2RlU2V0dGluZ3MuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaXNOZWVkZWQgPSBfdmFsdWUuaXNOZWVkZWQ7XG4gICAgdGhpcy5sZW5ndGggPSBfdmFsdWUubGVuZ3RoO1xuICAgIHRoaXMuaXNSZXBlYXROZWVkZWQgPSBfdmFsdWUuaXNSZXBlYXROZWVkZWQ7XG4gICAgdGhpcy5oaW50ID0gX3ZhbHVlLmhpbnQ7XG4gICAgdGhpcy5pc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZCA9XG4gICAgICBfdmFsdWUuaXNPdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkVuYWJsZWQ7XG4gICAgdGhpcy5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkFsZXJ0ID0gX3ZhbHVlLm91dHNpZGVGaXJzdFJlZGlyZWN0aW9uQWxlcnQ7XG4gICAgdGhpcy5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvblRleHQgPSBfdmFsdWUub3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25UZXh0O1xuICAgIHRoaXMuZW5hYmxlQmlvbWV0cmljID0gX3ZhbHVlLmVuYWJsZUJpb21ldHJpYztcbiAgICBQaW5Db2RlU2V0dGluZ3MucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpc05lZWRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNOZWVkZWQ7XG4gIH1cbiAgc2V0IGlzTmVlZGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNOZWVkZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuICBzZXQgbGVuZ3RoKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgaXNSZXBlYXROZWVkZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVwZWF0TmVlZGVkO1xuICB9XG4gIHNldCBpc1JlcGVhdE5lZWRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzUmVwZWF0TmVlZGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGhpbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faGludDtcbiAgfVxuICBzZXQgaGludCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faGludCA9IHZhbHVlO1xuICB9XG4gIGdldCBpc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNPdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkVuYWJsZWQ7XG4gIH1cbiAgc2V0IGlzT3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25FbmFibGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNPdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25BbGVydCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkFsZXJ0O1xuICB9XG4gIHNldCBvdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkFsZXJ0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9vdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkFsZXJ0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG91dHNpZGVGaXJzdFJlZGlyZWN0aW9uVGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vdXRzaWRlRmlyc3RSZWRpcmVjdGlvblRleHQ7XG4gIH1cbiAgc2V0IG91dHNpZGVGaXJzdFJlZGlyZWN0aW9uVGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25UZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVuYWJsZUJpb21ldHJpYygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlQmlvbWV0cmljO1xuICB9XG4gIHNldCBlbmFibGVCaW9tZXRyaWModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbmFibGVCaW9tZXRyaWMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQaW5Db2RlU2V0dGluZ3Muc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUGluQ29kZVNldHRpbmdzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNOZWVkZWQ6IHRoaXMuaXNOZWVkZWQsXG4gICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxuICAgICAgaXNSZXBlYXROZWVkZWQ6IHRoaXMuaXNSZXBlYXROZWVkZWQsXG4gICAgICBoaW50OiB0aGlzLmhpbnQsXG4gICAgICBpc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZDogdGhpcy5pc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZCxcbiAgICAgIG91dHNpZGVGaXJzdFJlZGlyZWN0aW9uQWxlcnQ6IHRoaXMub3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25BbGVydCxcbiAgICAgIG91dHNpZGVGaXJzdFJlZGlyZWN0aW9uVGV4dDogdGhpcy5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvblRleHQsXG4gICAgICBlbmFibGVCaW9tZXRyaWM6IHRoaXMuZW5hYmxlQmlvbWV0cmljXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUGluQ29kZVNldHRpbmdzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNOZWVkZWQ6IHRoaXMuaXNOZWVkZWQsXG4gICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxuICAgICAgaXNSZXBlYXROZWVkZWQ6IHRoaXMuaXNSZXBlYXROZWVkZWQsXG4gICAgICBoaW50OiB0aGlzLmhpbnQsXG4gICAgICBpc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZDogdGhpcy5pc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZCxcbiAgICAgIG91dHNpZGVGaXJzdFJlZGlyZWN0aW9uQWxlcnQ6IHRoaXMub3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25BbGVydCxcbiAgICAgIG91dHNpZGVGaXJzdFJlZGlyZWN0aW9uVGV4dDogdGhpcy5vdXRzaWRlRmlyc3RSZWRpcmVjdGlvblRleHQsXG4gICAgICBlbmFibGVCaW9tZXRyaWM6IHRoaXMuZW5hYmxlQmlvbWV0cmljXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQaW5Db2RlU2V0dGluZ3Mge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFBpbkNvZGVTZXR0aW5nc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaXNOZWVkZWQ/OiBib29sZWFuO1xuICAgIGxlbmd0aD86IG51bWJlcjtcbiAgICBpc1JlcGVhdE5lZWRlZD86IGJvb2xlYW47XG4gICAgaGludD86IHN0cmluZztcbiAgICBpc091dHNpZGVGaXJzdFJlZGlyZWN0aW9uRW5hYmxlZD86IGJvb2xlYW47XG4gICAgb3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25BbGVydD86IHN0cmluZztcbiAgICBvdXRzaWRlRmlyc3RSZWRpcmVjdGlvblRleHQ/OiBzdHJpbmc7XG4gICAgZW5hYmxlQmlvbWV0cmljPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQaW5Db2RlU2V0dGluZ3NcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlzTmVlZGVkPzogYm9vbGVhbjtcbiAgICBsZW5ndGg/OiBudW1iZXI7XG4gICAgaXNSZXBlYXROZWVkZWQ/OiBib29sZWFuO1xuICAgIGhpbnQ/OiBzdHJpbmc7XG4gICAgaXNPdXRzaWRlRmlyc3RSZWRpcmVjdGlvbkVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG91dHNpZGVGaXJzdFJlZGlyZWN0aW9uQWxlcnQ/OiBzdHJpbmc7XG4gICAgb3V0c2lkZUZpcnN0UmVkaXJlY3Rpb25UZXh0Pzogc3RyaW5nO1xuICAgIGVuYWJsZUJpb21ldHJpYz86IGJvb2xlYW47XG4gIH1cbn1cbiJdfQ==