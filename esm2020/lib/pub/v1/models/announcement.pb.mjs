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
        this.isAdvertisement = _value.isAdvertisement;
        this.startTime = _value.startTime;
        this.endTime = _value.endTime;
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
        _instance.isAdvertisement = _instance.isAdvertisement || false;
        _instance.startTime = _instance.startTime || '0';
        _instance.endTime = _instance.endTime || '0';
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
                    _instance.isAdvertisement = _reader.readBool();
                    break;
                case 6:
                    _instance.startTime = _reader.readInt64String();
                    break;
                case 7:
                    _instance.endTime = _reader.readInt64String();
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
        if (_instance.isAdvertisement) {
            _writer.writeBool(5, _instance.isAdvertisement);
        }
        if (_instance.startTime) {
            _writer.writeInt64String(6, _instance.startTime);
        }
        if (_instance.endTime) {
            _writer.writeInt64String(7, _instance.endTime);
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
    get isAdvertisement() {
        return this._isAdvertisement;
    }
    set isAdvertisement(value) {
        this._isAdvertisement = value;
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(value) {
        this._startTime = value;
    }
    get endTime() {
        return this._endTime;
    }
    set endTime(value) {
        this._endTime = value;
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
            isAdvertisement: this.isAdvertisement,
            startTime: this.startTime,
            endTime: this.endTime
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
            isAdvertisement: this.isAdvertisement,
            startTime: this.startTime,
            endTime: this.endTime
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
            showAsDetailedViewUntil: this.showAsDetailedViewUntil
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
            showAsDetailedViewUntil: this.showAsDetailedViewUntil
        };
    }
}
AnnouncementDetailsViewConfiguration.id = 'proto.pub.v1.models.AnnouncementDetailsViewConfiguration';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3VuY2VtZW50LnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvdG8vc3JjL2xpYi9wdWIvdjEvbW9kZWxzL2Fubm91bmNlbWVudC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxNQUFNLENBQU4sSUFBWSxvQkFJWDtBQUpELFdBQVksb0JBQW9CO0lBQzlCLCtEQUFRLENBQUE7SUFDUixxRUFBVyxDQUFBO0lBQ1gsaUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBSS9CO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQXFIdkI7OztPQUdHO0lBQ0gsWUFBWSxNQUFnRDtRQUMxRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQzNCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDekMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWxJRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBdUI7UUFDekMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztRQUNuRCxTQUFTLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7UUFDakQsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBdUIsRUFDdkIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3JDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLE9BQU8sRUFDakIsbUJBQW1CLENBQUMsMkJBQTJCLENBQ2hELENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDOUMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXVCLEVBQ3ZCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNuQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDakIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLE9BQWMsRUFDeEIsbUJBQW1CLENBQUMsdUJBQXVCLENBQzVDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBMkJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBeUI7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBeUI7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBdUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBc0M7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBMEI7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUF5QjtRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUF5QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDM0QsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixRQUFRLEVBQ04sb0JBQW9CLENBQ2xCLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2xCO1lBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ25FLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7SUFDSixDQUFDOztBQXZPTSxlQUFFLEdBQUcsa0NBQWtDLENBQUM7QUFxUWpEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFtQjtJQWdKOUI7OztPQUdHO0lBQ0gsWUFBWSxNQUF1RDtRQUNqRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZTtZQUMzQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUN0RCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUztZQUMvQixDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNoRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCO1lBQy9DLENBQUMsQ0FBQyxJQUFJLG9DQUFvQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsbUJBQW1CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFsS0Q7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUMzQyxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FDN0MsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBOEI7UUFDaEQsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDOUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUN0RCxTQUFTLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLElBQUksU0FBUyxDQUFDO1FBQ25FLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7UUFDdkQsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUN2QyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixJQUFJLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBOEIsRUFDOUIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDOUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGVBQWUsR0FBRyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUMzRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsZUFBZSxFQUN6QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQ3JELENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsU0FBUyxFQUNuQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQ3JELENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLG9DQUFvQyxFQUFFLENBQUM7b0JBQ3pFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxpQkFBaUIsRUFDM0Isb0NBQW9DLENBQUMsMkJBQTJCLENBQ2pFLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELG1CQUFtQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBOEIsRUFDOUIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN6QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGVBQXNCLEVBQ2hDLG1CQUFtQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FDakQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsU0FBZ0IsRUFDMUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUNqRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTtZQUMvQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGlCQUF3QixFQUNsQyxvQ0FBb0MsQ0FBQyx1QkFBdUIsQ0FDN0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQWlDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQXlCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQXlCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQXlCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQXlCO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQTJDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBMkM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBeUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLGlCQUFpQixDQUNuQixLQUF1RDtRQUV2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pDLENBQUMsQ0FBQyxTQUFTO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDakUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25DLENBQUMsQ0FBQyxTQUFTO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3pFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQzs7QUFwUk0sc0JBQUUsR0FBRyx5Q0FBeUMsQ0FBQztBQW9UeEQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sb0NBQW9DO0lBMEUvQzs7O09BR0c7SUFDSCxZQUNFLE1BQXdFO1FBRXhFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUM7UUFDOUQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztRQUM5RCxvQ0FBb0MsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWxGRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxvQ0FBb0MsRUFBRSxDQUFDO1FBQzVELG9DQUFvQyxDQUFDLDJCQUEyQixDQUM5RCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUErQztRQUNqRSxTQUFTLENBQUMsdUJBQXVCO1lBQy9CLFNBQVMsQ0FBQyx1QkFBdUIsSUFBSSxHQUFHLENBQUM7UUFDM0MsU0FBUyxDQUFDLHVCQUF1QjtZQUMvQixTQUFTLENBQUMsdUJBQXVCLElBQUksR0FBRyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUErQyxFQUMvQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzlELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzlELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxvQ0FBb0MsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQStDLEVBQy9DLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLHVCQUF1QixFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNyQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQztJQWlCRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBSSx1QkFBdUIsQ0FBQyxLQUF5QjtRQUNuRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBSSx1QkFBdUIsQ0FBQyxLQUF5QjtRQUNuRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxvQ0FBb0MsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0UsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCx1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ3JELHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7U0FDdEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDckQsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtTQUN0RCxDQUFDO0lBQ0osQ0FBQzs7QUExSU0sdUNBQUUsR0FBRywwREFBMEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAwIGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvZmlsZS5wYic7XG5leHBvcnQgZW51bSBBbm5vdW5jZW1lbnRTZXZlcml0eSB7XG4gIElORk8gPSAwLFxuICBXQVJOSU5HID0gMSxcbiAgRkFUQUwgPSAyXG59XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuQW5ub3VuY2VtZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLkFubm91bmNlbWVudCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFubm91bmNlbWVudCgpO1xuICAgIEFubm91bmNlbWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFubm91bmNlbWVudCkge1xuICAgIF9pbnN0YW5jZS50aXRsZSA9IF9pbnN0YW5jZS50aXRsZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudXJsID0gX2luc3RhbmNlLnVybCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2V2ZXJpdHkgPSBfaW5zdGFuY2Uuc2V2ZXJpdHkgfHwgMDtcbiAgICBfaW5zdGFuY2UuZGV0YWlscyA9IF9pbnN0YW5jZS5kZXRhaWxzIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuaXNBZHZlcnRpc2VtZW50ID0gX2luc3RhbmNlLmlzQWR2ZXJ0aXNlbWVudCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lID0gX2luc3RhbmNlLnN0YXJ0VGltZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmVuZFRpbWUgPSBfaW5zdGFuY2UuZW5kVGltZSB8fCAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBbm5vdW5jZW1lbnQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudXJsID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2V2ZXJpdHkgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuZGV0YWlscyA9IG5ldyBBbm5vdW5jZW1lbnREZXRhaWxzKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5kZXRhaWxzLFxuICAgICAgICAgICAgQW5ub3VuY2VtZW50RGV0YWlscy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmlzQWR2ZXJ0aXNlbWVudCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGFydFRpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmVuZFRpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQW5ub3VuY2VtZW50LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQW5ub3VuY2VtZW50LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRpdGxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50aXRsZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudXJsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS51cmwpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNldmVyaXR5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgzLCBfaW5zdGFuY2Uuc2V2ZXJpdHkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRldGFpbHMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuZGV0YWlscyBhcyBhbnksXG4gICAgICAgIEFubm91bmNlbWVudERldGFpbHMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaXNBZHZlcnRpc2VtZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg1LCBfaW5zdGFuY2UuaXNBZHZlcnRpc2VtZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGFydFRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg2LCBfaW5zdGFuY2Uuc3RhcnRUaW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbmRUaW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNywgX2luc3RhbmNlLmVuZFRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RpdGxlPzogc3RyaW5nO1xuICBwcml2YXRlIF91cmw/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NldmVyaXR5PzogQW5ub3VuY2VtZW50U2V2ZXJpdHk7XG4gIHByaXZhdGUgX2RldGFpbHM/OiBBbm5vdW5jZW1lbnREZXRhaWxzO1xuICBwcml2YXRlIF9pc0FkdmVydGlzZW1lbnQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9zdGFydFRpbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2VuZFRpbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBBbm5vdW5jZW1lbnQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QW5ub3VuY2VtZW50LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRpdGxlID0gX3ZhbHVlLnRpdGxlO1xuICAgIHRoaXMudXJsID0gX3ZhbHVlLnVybDtcbiAgICB0aGlzLnNldmVyaXR5ID0gX3ZhbHVlLnNldmVyaXR5O1xuICAgIHRoaXMuZGV0YWlscyA9IF92YWx1ZS5kZXRhaWxzXG4gICAgICA/IG5ldyBBbm5vdW5jZW1lbnREZXRhaWxzKF92YWx1ZS5kZXRhaWxzKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pc0FkdmVydGlzZW1lbnQgPSBfdmFsdWUuaXNBZHZlcnRpc2VtZW50O1xuICAgIHRoaXMuc3RhcnRUaW1lID0gX3ZhbHVlLnN0YXJ0VGltZTtcbiAgICB0aGlzLmVuZFRpbWUgPSBfdmFsdWUuZW5kVGltZTtcbiAgICBBbm5vdW5jZW1lbnQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cmw7XG4gIH1cbiAgc2V0IHVybCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXJsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNldmVyaXR5KCk6IEFubm91bmNlbWVudFNldmVyaXR5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2V2ZXJpdHk7XG4gIH1cbiAgc2V0IHNldmVyaXR5KHZhbHVlOiBBbm5vdW5jZW1lbnRTZXZlcml0eSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NldmVyaXR5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRldGFpbHMoKTogQW5ub3VuY2VtZW50RGV0YWlscyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RldGFpbHM7XG4gIH1cbiAgc2V0IGRldGFpbHModmFsdWU6IEFubm91bmNlbWVudERldGFpbHMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXRhaWxzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlzQWR2ZXJ0aXNlbWVudCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNBZHZlcnRpc2VtZW50O1xuICB9XG4gIHNldCBpc0FkdmVydGlzZW1lbnQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc0FkdmVydGlzZW1lbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RhcnRUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTtcbiAgfVxuICBzZXQgc3RhcnRUaW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5kVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbmRUaW1lO1xuICB9XG4gIHNldCBlbmRUaW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQW5ub3VuY2VtZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFubm91bmNlbWVudC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgIHNldmVyaXR5OiB0aGlzLnNldmVyaXR5LFxuICAgICAgZGV0YWlsczogdGhpcy5kZXRhaWxzID8gdGhpcy5kZXRhaWxzLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBpc0FkdmVydGlzZW1lbnQ6IHRoaXMuaXNBZHZlcnRpc2VtZW50LFxuICAgICAgc3RhcnRUaW1lOiB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIGVuZFRpbWU6IHRoaXMuZW5kVGltZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFubm91bmNlbWVudC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgIHNldmVyaXR5OlxuICAgICAgICBBbm5vdW5jZW1lbnRTZXZlcml0eVtcbiAgICAgICAgICB0aGlzLnNldmVyaXR5ID09PSBudWxsIHx8IHRoaXMuc2V2ZXJpdHkgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuc2V2ZXJpdHlcbiAgICAgICAgXSxcbiAgICAgIGRldGFpbHM6IHRoaXMuZGV0YWlscyA/IHRoaXMuZGV0YWlscy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBpc0FkdmVydGlzZW1lbnQ6IHRoaXMuaXNBZHZlcnRpc2VtZW50LFxuICAgICAgc3RhcnRUaW1lOiB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIGVuZFRpbWU6IHRoaXMuZW5kVGltZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQW5ub3VuY2VtZW50IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBbm5vdW5jZW1lbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBzZXZlcml0eT86IEFubm91bmNlbWVudFNldmVyaXR5O1xuICAgIGRldGFpbHM/OiBBbm5vdW5jZW1lbnREZXRhaWxzLkFzT2JqZWN0O1xuICAgIGlzQWR2ZXJ0aXNlbWVudD86IGJvb2xlYW47XG4gICAgc3RhcnRUaW1lPzogc3RyaW5nO1xuICAgIGVuZFRpbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQW5ub3VuY2VtZW50XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgc2V2ZXJpdHk/OiBzdHJpbmc7XG4gICAgZGV0YWlscz86IEFubm91bmNlbWVudERldGFpbHMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGlzQWR2ZXJ0aXNlbWVudD86IGJvb2xlYW47XG4gICAgc3RhcnRUaW1lPzogc3RyaW5nO1xuICAgIGVuZFRpbWU/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLkFubm91bmNlbWVudERldGFpbHNcbiAqL1xuZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERldGFpbHMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLkFubm91bmNlbWVudERldGFpbHMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBbm5vdW5jZW1lbnREZXRhaWxzKCk7XG4gICAgQW5ub3VuY2VtZW50RGV0YWlscy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFubm91bmNlbWVudERldGFpbHMpIHtcbiAgICBfaW5zdGFuY2UudGl0bGUgPSBfaW5zdGFuY2UudGl0bGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uID0gX2luc3RhbmNlLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgIF9pbnN0YW5jZS51cmxMYWJlbCA9IF9pbnN0YW5jZS51cmxMYWJlbCB8fCAnJztcbiAgICBfaW5zdGFuY2UucHJpbWFyeUNvbG9yID0gX2luc3RhbmNlLnByaW1hcnlDb2xvciB8fCAnJztcbiAgICBfaW5zdGFuY2UuYmFja2dyb3VuZEltYWdlID0gX2luc3RhbmNlLmJhY2tncm91bmRJbWFnZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmFuaW1hdGlvbiA9IF9pbnN0YW5jZS5hbmltYXRpb24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50aW1lID0gX2luc3RhbmNlLnRpbWUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS52aWV3Q29uZmlndXJhdGlvbiA9IF9pbnN0YW5jZS52aWV3Q29uZmlndXJhdGlvbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBbm5vdW5jZW1lbnREZXRhaWxzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50aXRsZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudXJsTGFiZWwgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5wcmltYXJ5Q29sb3IgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5iYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5iYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5hbmltYXRpb24gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5hbmltYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS50aW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS52aWV3Q29uZmlndXJhdGlvbiA9IG5ldyBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnZpZXdDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBbm5vdW5jZW1lbnREZXRhaWxzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQW5ub3VuY2VtZW50RGV0YWlscyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50aXRsZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudGl0bGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlc2NyaXB0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudXJsTGFiZWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnVybExhYmVsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wcmltYXJ5Q29sb3IpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnByaW1hcnlDb2xvcik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLmJhY2tncm91bmRJbWFnZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hbmltYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UuYW5pbWF0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg3LCBfaW5zdGFuY2UudGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uudmlld0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2Uudmlld0NvbmZpZ3VyYXRpb24gYXMgYW55LFxuICAgICAgICBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdGl0bGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF91cmxMYWJlbD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJpbWFyeUNvbG9yPzogc3RyaW5nO1xuICBwcml2YXRlIF9iYWNrZ3JvdW5kSW1hZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGU7XG4gIHByaXZhdGUgX2FuaW1hdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZTtcbiAgcHJpdmF0ZSBfdGltZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdmlld0NvbmZpZ3VyYXRpb24/OiBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb247XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBBbm5vdW5jZW1lbnREZXRhaWxzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFubm91bmNlbWVudERldGFpbHMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGl0bGUgPSBfdmFsdWUudGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IF92YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLnVybExhYmVsID0gX3ZhbHVlLnVybExhYmVsO1xuICAgIHRoaXMucHJpbWFyeUNvbG9yID0gX3ZhbHVlLnByaW1hcnlDb2xvcjtcbiAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9IF92YWx1ZS5iYWNrZ3JvdW5kSW1hZ2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZShfdmFsdWUuYmFja2dyb3VuZEltYWdlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbmltYXRpb24gPSBfdmFsdWUuYW5pbWF0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUoX3ZhbHVlLmFuaW1hdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGltZSA9IF92YWx1ZS50aW1lO1xuICAgIHRoaXMudmlld0NvbmZpZ3VyYXRpb24gPSBfdmFsdWUudmlld0NvbmZpZ3VyYXRpb25cbiAgICAgID8gbmV3IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbihfdmFsdWUudmlld0NvbmZpZ3VyYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBBbm5vdW5jZW1lbnREZXRhaWxzLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVybExhYmVsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VybExhYmVsO1xuICB9XG4gIHNldCB1cmxMYWJlbCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXJsTGFiZWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHJpbWFyeUNvbG9yKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlDb2xvcjtcbiAgfVxuICBzZXQgcHJpbWFyeUNvbG9yKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wcmltYXJ5Q29sb3IgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYmFja2dyb3VuZEltYWdlKCk6IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRJbWFnZTtcbiAgfVxuICBzZXQgYmFja2dyb3VuZEltYWdlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYW5pbWF0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbjtcbiAgfVxuICBzZXQgYW5pbWF0aW9uKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbmltYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHNldCB0aW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZpZXdDb25maWd1cmF0aW9uKCk6IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdDb25maWd1cmF0aW9uO1xuICB9XG4gIHNldCB2aWV3Q29uZmlndXJhdGlvbihcbiAgICB2YWx1ZTogQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3ZpZXdDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQW5ub3VuY2VtZW50RGV0YWlscy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBbm5vdW5jZW1lbnREZXRhaWxzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHVybExhYmVsOiB0aGlzLnVybExhYmVsLFxuICAgICAgcHJpbWFyeUNvbG9yOiB0aGlzLnByaW1hcnlDb2xvcixcbiAgICAgIGJhY2tncm91bmRJbWFnZTogdGhpcy5iYWNrZ3JvdW5kSW1hZ2VcbiAgICAgICAgPyB0aGlzLmJhY2tncm91bmRJbWFnZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbiA/IHRoaXMuYW5pbWF0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICB2aWV3Q29uZmlndXJhdGlvbjogdGhpcy52aWV3Q29uZmlndXJhdGlvblxuICAgICAgICA/IHRoaXMudmlld0NvbmZpZ3VyYXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFubm91bmNlbWVudERldGFpbHMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgdXJsTGFiZWw6IHRoaXMudXJsTGFiZWwsXG4gICAgICBwcmltYXJ5Q29sb3I6IHRoaXMucHJpbWFyeUNvbG9yLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiB0aGlzLmJhY2tncm91bmRJbWFnZVxuICAgICAgICA/IHRoaXMuYmFja2dyb3VuZEltYWdlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24gPyB0aGlzLmFuaW1hdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICB2aWV3Q29uZmlndXJhdGlvbjogdGhpcy52aWV3Q29uZmlndXJhdGlvblxuICAgICAgICA/IHRoaXMudmlld0NvbmZpZ3VyYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBbm5vdW5jZW1lbnREZXRhaWxzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBbm5vdW5jZW1lbnREZXRhaWxzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB1cmxMYWJlbD86IHN0cmluZztcbiAgICBwcmltYXJ5Q29sb3I/OiBzdHJpbmc7XG4gICAgYmFja2dyb3VuZEltYWdlPzogcHJvdG9QdWJWMU1vZGVsczAwMC5GaWxlLkFzT2JqZWN0O1xuICAgIGFuaW1hdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZS5Bc09iamVjdDtcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIHZpZXdDb25maWd1cmF0aW9uPzogQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEFubm91bmNlbWVudERldGFpbHNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHVybExhYmVsPzogc3RyaW5nO1xuICAgIHByaW1hcnlDb2xvcj86IHN0cmluZztcbiAgICBiYWNrZ3JvdW5kSW1hZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDAwLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGFuaW1hdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDAuRmlsZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGltZT86IHN0cmluZztcbiAgICB2aWV3Q29uZmlndXJhdGlvbj86IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLkFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5Bbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24oKTtcbiAgICBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24pIHtcbiAgICBfaW5zdGFuY2Uuc2hvd0FzRGV0YWlsZWRWaWV3U2luY2UgPVxuICAgICAgX2luc3RhbmNlLnNob3dBc0RldGFpbGVkVmlld1NpbmNlIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc2hvd0FzRGV0YWlsZWRWaWV3VW50aWwgPVxuICAgICAgX2luc3RhbmNlLnNob3dBc0RldGFpbGVkVmlld1VudGlsIHx8ICcwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hvd0FzRGV0YWlsZWRWaWV3U2luY2UgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNob3dBc0RldGFpbGVkVmlld1VudGlsID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zaG93QXNEZXRhaWxlZFZpZXdTaW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIF9pbnN0YW5jZS5zaG93QXNEZXRhaWxlZFZpZXdTaW5jZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hvd0FzRGV0YWlsZWRWaWV3VW50aWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2Uuc2hvd0FzRGV0YWlsZWRWaWV3VW50aWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dBc0RldGFpbGVkVmlld1NpbmNlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG93QXNEZXRhaWxlZFZpZXdVbnRpbD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24uQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNob3dBc0RldGFpbGVkVmlld1NpbmNlID0gX3ZhbHVlLnNob3dBc0RldGFpbGVkVmlld1NpbmNlO1xuICAgIHRoaXMuc2hvd0FzRGV0YWlsZWRWaWV3VW50aWwgPSBfdmFsdWUuc2hvd0FzRGV0YWlsZWRWaWV3VW50aWw7XG4gICAgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2hvd0FzRGV0YWlsZWRWaWV3U2luY2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FzRGV0YWlsZWRWaWV3U2luY2U7XG4gIH1cbiAgc2V0IHNob3dBc0RldGFpbGVkVmlld1NpbmNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zaG93QXNEZXRhaWxlZFZpZXdTaW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzaG93QXNEZXRhaWxlZFZpZXdVbnRpbCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG93QXNEZXRhaWxlZFZpZXdVbnRpbDtcbiAgfVxuICBzZXQgc2hvd0FzRGV0YWlsZWRWaWV3VW50aWwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3dBc0RldGFpbGVkVmlld1VudGlsID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dBc0RldGFpbGVkVmlld1NpbmNlOiB0aGlzLnNob3dBc0RldGFpbGVkVmlld1NpbmNlLFxuICAgICAgc2hvd0FzRGV0YWlsZWRWaWV3VW50aWw6IHRoaXMuc2hvd0FzRGV0YWlsZWRWaWV3VW50aWxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93QXNEZXRhaWxlZFZpZXdTaW5jZTogdGhpcy5zaG93QXNEZXRhaWxlZFZpZXdTaW5jZSxcbiAgICAgIHNob3dBc0RldGFpbGVkVmlld1VudGlsOiB0aGlzLnNob3dBc0RldGFpbGVkVmlld1VudGlsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBbm5vdW5jZW1lbnREZXRhaWxzVmlld0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFubm91bmNlbWVudERldGFpbHNWaWV3Q29uZmlndXJhdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2hvd0FzRGV0YWlsZWRWaWV3U2luY2U/OiBzdHJpbmc7XG4gICAgc2hvd0FzRGV0YWlsZWRWaWV3VW50aWw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQW5ub3VuY2VtZW50RGV0YWlsc1ZpZXdDb25maWd1cmF0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzaG93QXNEZXRhaWxlZFZpZXdTaW5jZT86IHN0cmluZztcbiAgICBzaG93QXNEZXRhaWxlZFZpZXdVbnRpbD86IHN0cmluZztcbiAgfVxufVxuIl19