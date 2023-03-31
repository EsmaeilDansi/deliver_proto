import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models000 from '../../../pub/v1/models/file.pb';
export var AnnouncementSeverity;
(function (AnnouncementSeverity) {
    AnnouncementSeverity[AnnouncementSeverity["INFO"] = 0] = "INFO";
    AnnouncementSeverity[AnnouncementSeverity["WARNING"] = 1] = "WARNING";
    AnnouncementSeverity[AnnouncementSeverity["FATAL"] = 2] = "FATAL";
})(AnnouncementSeverity || (AnnouncementSeverity = {}));
/**
 * Message implementation for proto.pub.v1.models.Announcement
 */
export class Announcement {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Announcement to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.title = _value.title;
        this.url = _value.url;
        this.severity = _value.severity;
        this.details = _value.details
            ? new AnnouncementDetails(_value.details)
            : undefined;
        this.forcedToShow = _value.forcedToShow;
        this.isAdvertisement = _value.isAdvertisement;
        Announcement.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Announcement();
        Announcement.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.title = _instance.title || '';
        _instance.url = _instance.url || '';
        _instance.severity = _instance.severity || 0;
        _instance.details = _instance.details || undefined;
        _instance.forcedToShow = _instance.forcedToShow || false;
        _instance.isAdvertisement = _instance.isAdvertisement || false;
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
                    _instance.title = _reader.readString();
                    break;
                case 2:
                    _instance.url = _reader.readString();
                    break;
                case 3:
                    _instance.severity = _reader.readEnum();
                    break;
                case 4:
                    _instance.details = new AnnouncementDetails();
                    _reader.readMessage(_instance.details, AnnouncementDetails.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.forcedToShow = _reader.readBool();
                    break;
                case 6:
                    _instance.isAdvertisement = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Announcement.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.title) {
            _writer.writeString(1, _instance.title);
        }
        if (_instance.url) {
            _writer.writeString(2, _instance.url);
        }
        if (_instance.severity) {
            _writer.writeEnum(3, _instance.severity);
        }
        if (_instance.details) {
            _writer.writeMessage(4, _instance.details, AnnouncementDetails.serializeBinaryToWriter);
        }
        if (_instance.forcedToShow) {
            _writer.writeBool(5, _instance.forcedToShow);
        }
        if (_instance.isAdvertisement) {
            _writer.writeBool(6, _instance.isAdvertisement);
        }
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
    }
    get severity() {
        return this._severity;
    }
    set severity(value) {
        this._severity = value;
    }
    get details() {
        return this._details;
    }
    set details(value) {
        this._details = value;
    }
    get forcedToShow() {
        return this._forcedToShow;
    }
    set forcedToShow(value) {
        this._forcedToShow = value;
    }
    get isAdvertisement() {
        return this._isAdvertisement;
    }
    set isAdvertisement(value) {
        this._isAdvertisement = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Announcement.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            title: this.title,
            url: this.url,
            severity: this.severity,
            details: this.details ? this.details.toObject() : undefined,
            forcedToShow: this.forcedToShow,
            isAdvertisement: this.isAdvertisement
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
            title: this.title,
            url: this.url,
            severity: AnnouncementSeverity[this.severity === null || this.severity === undefined
                ? 0
                : this.severity],
            details: this.details ? this.details.toProtobufJSON(options) : null,
            forcedToShow: this.forcedToShow,
            isAdvertisement: this.isAdvertisement
        };
    }
}
Announcement.id = 'proto.pub.v1.models.Announcement';
/**
 * Message implementation for proto.pub.v1.models.AnnouncementDetails
 */
export class AnnouncementDetails {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AnnouncementDetails to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.title = _value.title;
        this.description = _value.description;
        this.urlLabel = _value.urlLabel;
        this.primaryColor = _value.primaryColor;
        this.backgroundImage = _value.backgroundImage
            ? new protoPubV1Models000.File(_value.backgroundImage)
            : undefined;
        this.animation = _value.animation
            ? new protoPubV1Models000.File(_value.animation)
            : undefined;
        this.time = _value.time;
        this.viewConfiguration = _value.viewConfiguration
            ? new AnnouncementDetailsViewConfiguration(_value.viewConfiguration)
            : undefined;
        AnnouncementDetails.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AnnouncementDetails();
        AnnouncementDetails.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.title = _instance.title || '';
        _instance.description = _instance.description || '';
        _instance.urlLabel = _instance.urlLabel || '';
        _instance.primaryColor = _instance.primaryColor || '';
        _instance.backgroundImage = _instance.backgroundImage || undefined;
        _instance.animation = _instance.animation || undefined;
        _instance.time = _instance.time || '0';
        _instance.viewConfiguration = _instance.viewConfiguration || undefined;
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
                    _instance.title = _reader.readString();
                    break;
                case 2:
                    _instance.description = _reader.readString();
                    break;
                case 3:
                    _instance.urlLabel = _reader.readString();
                    break;
                case 4:
                    _instance.primaryColor = _reader.readString();
                    break;
                case 5:
                    _instance.backgroundImage = new protoPubV1Models000.File();
                    _reader.readMessage(_instance.backgroundImage, protoPubV1Models000.File.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.animation = new protoPubV1Models000.File();
                    _reader.readMessage(_instance.animation, protoPubV1Models000.File.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.time = _reader.readInt64String();
                    break;
                case 8:
                    _instance.viewConfiguration = new AnnouncementDetailsViewConfiguration();
                    _reader.readMessage(_instance.viewConfiguration, AnnouncementDetailsViewConfiguration.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        AnnouncementDetails.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.title) {
            _writer.writeString(1, _instance.title);
        }
        if (_instance.description) {
            _writer.writeString(2, _instance.description);
        }
        if (_instance.urlLabel) {
            _writer.writeString(3, _instance.urlLabel);
        }
        if (_instance.primaryColor) {
            _writer.writeString(4, _instance.primaryColor);
        }
        if (_instance.backgroundImage) {
            _writer.writeMessage(5, _instance.backgroundImage, protoPubV1Models000.File.serializeBinaryToWriter);
        }
        if (_instance.animation) {
            _writer.writeMessage(6, _instance.animation, protoPubV1Models000.File.serializeBinaryToWriter);
        }
        if (_instance.time) {
            _writer.writeInt64String(7, _instance.time);
        }
        if (_instance.viewConfiguration) {
            _writer.writeMessage(8, _instance.viewConfiguration, AnnouncementDetailsViewConfiguration.serializeBinaryToWriter);
        }
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get urlLabel() {
        return this._urlLabel;
    }
    set urlLabel(value) {
        this._urlLabel = value;
    }
    get primaryColor() {
        return this._primaryColor;
    }
    set primaryColor(value) {
        this._primaryColor = value;
    }
    get backgroundImage() {
        return this._backgroundImage;
    }
    set backgroundImage(value) {
        this._backgroundImage = value;
    }
    get animation() {
        return this._animation;
    }
    set animation(value) {
        this._animation = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get viewConfiguration() {
        return this._viewConfiguration;
    }
    set viewConfiguration(value) {
        this._viewConfiguration = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AnnouncementDetails.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            title: this.title,
            description: this.description,
            urlLabel: this.urlLabel,
            primaryColor: this.primaryColor,
            backgroundImage: this.backgroundImage
                ? this.backgroundImage.toObject()
                : undefined,
            animation: this.animation ? this.animation.toObject() : undefined,
            time: this.time,
            viewConfiguration: this.viewConfiguration
                ? this.viewConfiguration.toObject()
                : undefined
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
            title: this.title,
            description: this.description,
            urlLabel: this.urlLabel,
            primaryColor: this.primaryColor,
            backgroundImage: this.backgroundImage
                ? this.backgroundImage.toProtobufJSON(options)
                : null,
            animation: this.animation ? this.animation.toProtobufJSON(options) : null,
            time: this.time,
            viewConfiguration: this.viewConfiguration
                ? this.viewConfiguration.toProtobufJSON(options)
                : null
        };
    }
}
AnnouncementDetails.id = 'proto.pub.v1.models.AnnouncementDetails';
/**
 * Message implementation for proto.pub.v1.models.AnnouncementDetailsViewConfiguration
 */
export class AnnouncementDetailsViewConfiguration {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AnnouncementDetailsViewConfiguration to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.showAsDetailedViewSince = _value.showAsDetailedViewSince;
        this.showAsDetailedViewUntil = _value.showAsDetailedViewUntil;
        this.clickableSince = _value.clickableSince;
        this.clickableUntil = _value.clickableUntil;
        AnnouncementDetailsViewConfiguration.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AnnouncementDetailsViewConfiguration();
        AnnouncementDetailsViewConfiguration.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.showAsDetailedViewSince =
            _instance.showAsDetailedViewSince || '0';
        _instance.showAsDetailedViewUntil =
            _instance.showAsDetailedViewUntil || '0';
        _instance.clickableSince = _instance.clickableSince || '0';
        _instance.clickableUntil = _instance.clickableUntil || '0';
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
                    _instance.showAsDetailedViewSince = _reader.readInt64String();
                    break;
                case 2:
                    _instance.showAsDetailedViewUntil = _reader.readInt64String();
                    break;
                case 3:
                    _instance.clickableSince = _reader.readInt64String();
                    break;
                case 4:
                    _instance.clickableUntil = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AnnouncementDetailsViewConfiguration.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.showAsDetailedViewSince) {
            _writer.writeInt64String(1, _instance.showAsDetailedViewSince);
        }
        if (_instance.showAsDetailedViewUntil) {
            _writer.writeInt64String(2, _instance.showAsDetailedViewUntil);
        }
        if (_instance.clickableSince) {
            _writer.writeInt64String(3, _instance.clickableSince);
        }
        if (_instance.clickableUntil) {
            _writer.writeInt64String(4, _instance.clickableUntil);
        }
    }
    get showAsDetailedViewSince() {
        return this._showAsDetailedViewSince;
    }
    set showAsDetailedViewSince(value) {
        this._showAsDetailedViewSince = value;
    }
    get showAsDetailedViewUntil() {
        return this._showAsDetailedViewUntil;
    }
    set showAsDetailedViewUntil(value) {
        this._showAsDetailedViewUntil = value;
    }
    get clickableSince() {
        return this._clickableSince;
    }
    set clickableSince(value) {
        this._clickableSince = value;
    }
    get clickableUntil() {
        return this._clickableUntil;
    }
    set clickableUntil(value) {
        this._clickableUntil = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AnnouncementDetailsViewConfiguration.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            showAsDetailedViewSince: this.showAsDetailedViewSince,
            showAsDetailedViewUntil: this.showAsDetailedViewUntil,
            clickableSince: this.clickableSince,
            clickableUntil: this.clickableUntil
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
            showAsDetailedViewSince: this.showAsDetailedViewSince,
            showAsDetailedViewUntil: this.showAsDetailedViewUntil,
            clickableSince: this.clickableSince,
            clickableUntil: this.clickableUntil
        };
    }
}
AnnouncementDetailsViewConfiguration.id = 'proto.pub.v1.models.AnnouncementDetailsViewConfiguration';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3VuY2VtZW50LnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvdG8vc3JjL2xpYi9wdWIvdjEvbW9kZWxzL2Fubm91bmNlbWVudC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxNQUFNLENBQU4sSUFBWSxvQkFJWDtBQUpELFdBQVksb0JBQW9CO0lBQzlCLCtEQUFRLENBQUE7SUFDUixxRUFBVyxDQUFBO0lBQ1gsaUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBSS9CO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQTZHdkI7OztPQUdHO0lBQ0gsWUFBWSxNQUFnRDtRQUMxRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQzNCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDekMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDOUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBekhE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Q3BDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCx1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ3JELHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDckQsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNwQyxDQUFDO0lBQ0osQ0FBQzs7QUE1S00sdUNBQUUsR0FBRywwREFBMEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAwIGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvZmlsZS5wYic7XG5leHBvcnQgZW51bSBBbm5vdW5jZW1lbnRTZXZlcml0eSB7XG4gIElORk8gPSAwLFxuICBXQVJOSU5HID0gMSxcbiAgRkFUQUwgPSAyXG59XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuQW5ub3VuY2VtZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLkFubm91bmNlbWVudCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFubm91bmNlbWVudCgpO1xuICAgIEFubm91bmNlbWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFubm91bmNlbWVudCkge1xuICAgIF9pbnN0YW5jZS50aXRsZSA9IF9pbnN0YW5jZS50aXRsZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudXJsID0gX2luc3RhbmNlLnVybCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2V2ZXJpdHkgPSBfaW5zdGFuY2Uuc2V2ZXJpdHkgfHwgMDtcbiAgICBfaW5zdGFuY2UuZGV0YWlscyA9IF9pbnN0YW5jZS5kZXRhaWxzIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZm9yY2VkVG9TaG93ID0gX2luc3RhbmNlLmZvcmNlZFRvU2hvdyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuaXNBZHZlcnRpc2VtZW50ID0gX2luc3RhbmNlLmlzQWR2ZXJ0aXNlbWVudCB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFubm91bmNlbWVudCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGl0bGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS51cmwgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXZlcml0eSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXRhaWxzID0gbmV3IEFubm91bmNlbWVudERldGFpbHMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmRldGFpbHMsXG4gICAgICAgICAgICBBbm5vdW5jZW1lbnREZXRhaWxzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9yY2VkVG9TaG93ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmlzQWR2ZXJ0aXNlbWVudCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFubm91bmNlbWVudC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFubm91bmNlbWVudCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50aXRsZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudGl0bGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVybCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudXJsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zZXZlcml0eSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMywgX2luc3RhbmNlLnNldmVyaXR5KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXRhaWxzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmRldGFpbHMgYXMgYW55LFxuICAgICAgICBBbm5vdW5jZW1lbnREZXRhaWxzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcmNlZFRvU2hvdykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNSwgX2luc3RhbmNlLmZvcmNlZFRvU2hvdyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaXNBZHZlcnRpc2VtZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg2LCBfaW5zdGFuY2UuaXNBZHZlcnRpc2VtZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdXJsPzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXZlcml0eT86IEFubm91bmNlbWVudFNldmVyaXR5O1xuICBwcml2YXRlIF9kZXRhaWxzPzogQW5ub3VuY2VtZW50RGV0YWlscztcbiAgcHJpdmF0ZSBfZm9yY2VkVG9TaG93PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNBZHZlcnRpc2VtZW50PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFubm91bmNlbWVudCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBbm5vdW5jZW1lbnQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGl0bGUgPSBfdmFsdWUudGl0bGU7XG4gICAgdGhpcy51cmwgPSBfdmFsdWUudXJsO1xuICAgIHRoaXMuc2V2ZXJpdHkgPSBfdmFsdWUuc2V2ZXJpdHk7XG4gICAgdGhpcy5kZXRhaWxzID0gX3ZhbHVlLmRldGFpbHNcbiAgICAgID8gbmV3IEFubm91bmNlbWVudERldGFpbHMoX3ZhbHVlLmRldGFpbHMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvcmNlZFRvU2hvdyA9IF92YWx1ZS5mb3JjZWRUb1Nob3c7XG4gICAgdGhpcy5pc0FkdmVydGlzZW1lbnQgPSBfdmFsdWUuaXNBZHZlcnRpc2VtZW50O1xuICAgIEFubm91bmNlbWVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXJsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgfVxuICBzZXQgdXJsKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cmwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2V2ZXJpdHkoKTogQW5ub3VuY2VtZW50U2V2ZXJpdHkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXZlcml0eTtcbiAgfVxuICBzZXQgc2V2ZXJpdHkodmFsdWU6IEFubm91bmNlbWVudFNldmVyaXR5IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2V2ZXJpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGV0YWlscygpOiBBbm5vdW5jZW1lbnREZXRhaWxzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGV0YWlscztcbiAgfVxuICBzZXQgZGV0YWlscyh2YWx1ZTogQW5ub3VuY2VtZW50RGV0YWlscyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RldGFpbHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9yY2VkVG9TaG93KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZWRUb1Nob3c7XG4gIH1cbiAgc2V0IGZvcmNlZFRvU2hvdyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvcmNlZFRvU2hvdyA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0FkdmVydGlzZW1lbnQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWR2ZXJ0aXNlbWVudDtcbiAgfVxuICBzZXQgaXNBZHZlcnRpc2VtZW50KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNBZHZlcnRpc2VtZW50ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQW5ub3VuY2VtZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFubm91bmNlbWVudC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgIHNldmVyaXR5OiB0aGlzLnNldmVyaXR5LFxuICAgICAgZGV0YWlsczogdGhpcy5kZXRhaWxzID8gdGhpcy5kZXRhaWxzLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmb3JjZWRUb1Nob3c6IHRoaXMuZm9yY2VkVG9TaG93LFxuICAgICAgaXNBZHZlcnRpc2VtZW50OiB0aGlzLmlzQWR2ZXJ0aXNlbWVudFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFubm91bmNlbWVudC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgIHNldmVyaXR5OlxuICAgICAgICBBbm5vdW5jZW1lbnRTZXZlcml0eVtcbiAgICAgICAgICB0aGlzLnNldmVyaXR5ID09PSBudWxsIHx8IHRoaXMuc2V2ZXJpdHkgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuc2V2ZXJpdHlcbiAgICAgICAgXSxcbiAgICAgIGRldGFpbHM6IHRoaXMuZGV0YWlscyA/IHRoaXMuZGV0YWlscy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmb3JjZWRUb1Nob3c6IHRoaXMuZm9yY2VkVG9TaG93LFxuICAgICAgaXNBZHZlcnRpc2VtZW50OiB0aGlzLmlzQWR2ZXJ0aXNlbWVudFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQW5ub3VuY2VtZW50IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBbm5vdW5jZW1lbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBzZXZlcml0eT86IEFubm91bmNlbWVudFNldmVyaXR5O1xuICAgIGRldGFpbHM/OiBBbm5vdW5jZW1lbnREZXRhaWxzLkFzT2JqZWN0O1xuICAgIGZvcmNlZFRvU2hvdz86IGJvb2xlYW47XG4gICAgaXNBZHZlcnRpc2VtZW50PzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBbm5vdW5jZW1lbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBzZXZlcml0eT86IHN0cmluZztcbiAgICBkZXRhaWxzPzogQW5ub3VuY2VtZW50RGV0YWlscy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9yY2VkVG9TaG93PzogYm9vbGVhbjtcbiAgICBpc0FkdmVydGlzZW1lbnQ/OiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5Bbm5vdW5jZW1lbnREZXRhaWxzXG4gKi9cbmV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREZXRhaWxzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5Bbm5vdW5jZW1lbnREZXRhaWxzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQW5ub3VuY2VtZW50RGV0YWlscygpO1xuICAgIEFubm91bmNlbWVudERldGFpbHMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBbm5vdW5jZW1lbnREZXRhaWxzKSB7XG4gICAgX2luc3RhbmNlLnRpdGxlID0gX2luc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9pbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UudXJsTGFiZWwgPSBfaW5zdGFuY2UudXJsTGFiZWwgfHwgJyc7XG4gICAgX2luc3RhbmNlLnByaW1hcnlDb2xvciA9IF9pbnN0YW5jZS5wcmltYXJ5Q29sb3IgfHwgJyc7XG4gICAgX2luc3RhbmNlLmJhY2tncm91bmRJbWFnZSA9IF9pbnN0YW5jZS5iYWNrZ3JvdW5kSW1hZ2UgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5hbmltYXRpb24gPSBfaW5zdGFuY2UuYW5pbWF0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uudmlld0NvbmZpZ3VyYXRpb24gPSBfaW5zdGFuY2Uudmlld0NvbmZpZ3VyYXRpb24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQW5ub3VuY2VtZW50RGV0YWlscyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGl0bGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnVybExhYmVsID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucHJpbWFyeUNvbG9yID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYmFja2dyb3VuZEltYWdlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYmFja2dyb3VuZEltYWdlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuYW5pbWF0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYW5pbWF0aW9uLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2Uudmlld0NvbmZpZ3VyYXRpb24gPSBuZXcgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS52aWV3Q29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQW5ub3VuY2VtZW50RGV0YWlscy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFubm91bmNlbWVudERldGFpbHMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRpdGxlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXNjcmlwdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVybExhYmVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS51cmxMYWJlbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucHJpbWFyeUNvbG9yKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5wcmltYXJ5Q29sb3IpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJhY2tncm91bmRJbWFnZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5iYWNrZ3JvdW5kSW1hZ2UgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYW5pbWF0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLmFuaW1hdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNywgX2luc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnZpZXdDb25maWd1cmF0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLnZpZXdDb25maWd1cmF0aW9uIGFzIGFueSxcbiAgICAgICAgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RpdGxlPzogc3RyaW5nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfdXJsTGFiZWw/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3ByaW1hcnlDb2xvcj86IHN0cmluZztcbiAgcHJpdmF0ZSBfYmFja2dyb3VuZEltYWdlPzogcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlO1xuICBwcml2YXRlIF9hbmltYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGU7XG4gIHByaXZhdGUgX3RpbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3ZpZXdDb25maWd1cmF0aW9uPzogQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQW5ub3VuY2VtZW50RGV0YWlscyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBbm5vdW5jZW1lbnREZXRhaWxzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRpdGxlID0gX3ZhbHVlLnRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBfdmFsdWUuZGVzY3JpcHRpb247XG4gICAgdGhpcy51cmxMYWJlbCA9IF92YWx1ZS51cmxMYWJlbDtcbiAgICB0aGlzLnByaW1hcnlDb2xvciA9IF92YWx1ZS5wcmltYXJ5Q29sb3I7XG4gICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBfdmFsdWUuYmFja2dyb3VuZEltYWdlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUoX3ZhbHVlLmJhY2tncm91bmRJbWFnZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gX3ZhbHVlLmFuaW1hdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlKF92YWx1ZS5hbmltYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRpbWUgPSBfdmFsdWUudGltZTtcbiAgICB0aGlzLnZpZXdDb25maWd1cmF0aW9uID0gX3ZhbHVlLnZpZXdDb25maWd1cmF0aW9uXG4gICAgICA/IG5ldyBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24oX3ZhbHVlLnZpZXdDb25maWd1cmF0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQW5ub3VuY2VtZW50RGV0YWlscy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCB1cmxMYWJlbCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cmxMYWJlbDtcbiAgfVxuICBzZXQgdXJsTGFiZWwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VybExhYmVsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByaW1hcnlDb2xvcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wcmltYXJ5Q29sb3I7XG4gIH1cbiAgc2V0IHByaW1hcnlDb2xvcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHJpbWFyeUNvbG9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJhY2tncm91bmRJbWFnZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2U7XG4gIH1cbiAgc2V0IGJhY2tncm91bmRJbWFnZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmFja2dyb3VuZEltYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFuaW1hdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb247XG4gIH1cbiAgc2V0IGFuaW1hdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuICBzZXQgdGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCB2aWV3Q29uZmlndXJhdGlvbigpOiBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl92aWV3Q29uZmlndXJhdGlvbjtcbiAgfVxuICBzZXQgdmlld0NvbmZpZ3VyYXRpb24oXG4gICAgdmFsdWU6IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl92aWV3Q29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFubm91bmNlbWVudERldGFpbHMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQW5ub3VuY2VtZW50RGV0YWlscy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICB1cmxMYWJlbDogdGhpcy51cmxMYWJlbCxcbiAgICAgIHByaW1hcnlDb2xvcjogdGhpcy5wcmltYXJ5Q29sb3IsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRoaXMuYmFja2dyb3VuZEltYWdlXG4gICAgICAgID8gdGhpcy5iYWNrZ3JvdW5kSW1hZ2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24gPyB0aGlzLmFuaW1hdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgdmlld0NvbmZpZ3VyYXRpb246IHRoaXMudmlld0NvbmZpZ3VyYXRpb25cbiAgICAgICAgPyB0aGlzLnZpZXdDb25maWd1cmF0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBbm5vdW5jZW1lbnREZXRhaWxzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHVybExhYmVsOiB0aGlzLnVybExhYmVsLFxuICAgICAgcHJpbWFyeUNvbG9yOiB0aGlzLnByaW1hcnlDb2xvcixcbiAgICAgIGJhY2tncm91bmRJbWFnZTogdGhpcy5iYWNrZ3JvdW5kSW1hZ2VcbiAgICAgICAgPyB0aGlzLmJhY2tncm91bmRJbWFnZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uID8gdGhpcy5hbmltYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgdmlld0NvbmZpZ3VyYXRpb246IHRoaXMudmlld0NvbmZpZ3VyYXRpb25cbiAgICAgICAgPyB0aGlzLnZpZXdDb25maWd1cmF0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQW5ub3VuY2VtZW50RGV0YWlscyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQW5ub3VuY2VtZW50RGV0YWlsc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgdXJsTGFiZWw/OiBzdHJpbmc7XG4gICAgcHJpbWFyeUNvbG9yPzogc3RyaW5nO1xuICAgIGJhY2tncm91bmRJbWFnZT86IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZS5Bc09iamVjdDtcbiAgICBhbmltYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUuQXNPYmplY3Q7XG4gICAgdGltZT86IHN0cmluZztcbiAgICB2aWV3Q29uZmlndXJhdGlvbj86IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbi5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBbm5vdW5jZW1lbnREZXRhaWxzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB1cmxMYWJlbD86IHN0cmluZztcbiAgICBwcmltYXJ5Q29sb3I/OiBzdHJpbmc7XG4gICAgYmFja2dyb3VuZEltYWdlPzogcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBhbmltYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgdmlld0NvbmZpZ3VyYXRpb24/OiBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5Bbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uKCk7XG4gICAgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uKSB7XG4gICAgX2luc3RhbmNlLnNob3dBc0RldGFpbGVkVmlld1NpbmNlID1cbiAgICAgIF9pbnN0YW5jZS5zaG93QXNEZXRhaWxlZFZpZXdTaW5jZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnNob3dBc0RldGFpbGVkVmlld1VudGlsID1cbiAgICAgIF9pbnN0YW5jZS5zaG93QXNEZXRhaWxlZFZpZXdVbnRpbCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmNsaWNrYWJsZVNpbmNlID0gX2luc3RhbmNlLmNsaWNrYWJsZVNpbmNlIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuY2xpY2thYmxlVW50aWwgPSBfaW5zdGFuY2UuY2xpY2thYmxlVW50aWwgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zaG93QXNEZXRhaWxlZFZpZXdTaW5jZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hvd0FzRGV0YWlsZWRWaWV3VW50aWwgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmNsaWNrYWJsZVNpbmNlID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5jbGlja2FibGVVbnRpbCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2hvd0FzRGV0YWlsZWRWaWV3U2luY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygxLCBfaW5zdGFuY2Uuc2hvd0FzRGV0YWlsZWRWaWV3U2luY2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNob3dBc0RldGFpbGVkVmlld1VudGlsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLnNob3dBc0RldGFpbGVkVmlld1VudGlsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jbGlja2FibGVTaW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIF9pbnN0YW5jZS5jbGlja2FibGVTaW5jZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2xpY2thYmxlVW50aWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg0LCBfaW5zdGFuY2UuY2xpY2thYmxlVW50aWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dBc0RldGFpbGVkVmlld1NpbmNlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG93QXNEZXRhaWxlZFZpZXdVbnRpbD86IHN0cmluZztcbiAgcHJpdmF0ZSBfY2xpY2thYmxlU2luY2U/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2NsaWNrYWJsZVVudGlsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbi5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2hvd0FzRGV0YWlsZWRWaWV3U2luY2UgPSBfdmFsdWUuc2hvd0FzRGV0YWlsZWRWaWV3U2luY2U7XG4gICAgdGhpcy5zaG93QXNEZXRhaWxlZFZpZXdVbnRpbCA9IF92YWx1ZS5zaG93QXNEZXRhaWxlZFZpZXdVbnRpbDtcbiAgICB0aGlzLmNsaWNrYWJsZVNpbmNlID0gX3ZhbHVlLmNsaWNrYWJsZVNpbmNlO1xuICAgIHRoaXMuY2xpY2thYmxlVW50aWwgPSBfdmFsdWUuY2xpY2thYmxlVW50aWw7XG4gICAgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2hvd0FzRGV0YWlsZWRWaWV3U2luY2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FzRGV0YWlsZWRWaWV3U2luY2U7XG4gIH1cbiAgc2V0IHNob3dBc0RldGFpbGVkVmlld1NpbmNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zaG93QXNEZXRhaWxlZFZpZXdTaW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzaG93QXNEZXRhaWxlZFZpZXdVbnRpbCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG93QXNEZXRhaWxlZFZpZXdVbnRpbDtcbiAgfVxuICBzZXQgc2hvd0FzRGV0YWlsZWRWaWV3VW50aWwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3dBc0RldGFpbGVkVmlld1VudGlsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNsaWNrYWJsZVNpbmNlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrYWJsZVNpbmNlO1xuICB9XG4gIHNldCBjbGlja2FibGVTaW5jZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xpY2thYmxlU2luY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2xpY2thYmxlVW50aWwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpY2thYmxlVW50aWw7XG4gIH1cbiAgc2V0IGNsaWNrYWJsZVVudGlsKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGlja2FibGVVbnRpbCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93QXNEZXRhaWxlZFZpZXdTaW5jZTogdGhpcy5zaG93QXNEZXRhaWxlZFZpZXdTaW5jZSxcbiAgICAgIHNob3dBc0RldGFpbGVkVmlld1VudGlsOiB0aGlzLnNob3dBc0RldGFpbGVkVmlld1VudGlsLFxuICAgICAgY2xpY2thYmxlU2luY2U6IHRoaXMuY2xpY2thYmxlU2luY2UsXG4gICAgICBjbGlja2FibGVVbnRpbDogdGhpcy5jbGlja2FibGVVbnRpbFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dBc0RldGFpbGVkVmlld1NpbmNlOiB0aGlzLnNob3dBc0RldGFpbGVkVmlld1NpbmNlLFxuICAgICAgc2hvd0FzRGV0YWlsZWRWaWV3VW50aWw6IHRoaXMuc2hvd0FzRGV0YWlsZWRWaWV3VW50aWwsXG4gICAgICBjbGlja2FibGVTaW5jZTogdGhpcy5jbGlja2FibGVTaW5jZSxcbiAgICAgIGNsaWNrYWJsZVVudGlsOiB0aGlzLmNsaWNrYWJsZVVudGlsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2hvd0FzRGV0YWlsZWRWaWV3U2luY2U/OiBzdHJpbmc7XG4gICAgc2hvd0FzRGV0YWlsZWRWaWV3VW50aWw/OiBzdHJpbmc7XG4gICAgY2xpY2thYmxlU2luY2U/OiBzdHJpbmc7XG4gICAgY2xpY2thYmxlVW50aWw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzaG93QXNEZXRhaWxlZFZpZXdTaW5jZT86IHN0cmluZztcbiAgICBzaG93QXNEZXRhaWxlZFZpZXdVbnRpbD86IHN0cmluZztcbiAgICBjbGlja2FibGVTaW5jZT86IHN0cmluZztcbiAgICBjbGlja2FibGVVbnRpbD86IHN0cmluZztcbiAgfVxufVxuIl19