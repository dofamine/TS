export function sealed(param: string) {
    return function(target: Function, ...rest): void {
        console.log(`Sealing the constructor + ${param}`);

        Object.seal(target);
        Object.seal(target.prototype);
    };
}

export function logger<TFunc extends Function>(target: TFunc): TFunc {
    const newConstructor: Function = function() {
        console.log('Creating new instance');
        console.log(target);

        this.age = 30;
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.printLibrarian = function () {
        console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
    };

    return newConstructor as TFunc;
}

export function writable(isWritable: boolean) {
    return function (target: Object, method: string, descriptor: PropertyDescriptor) {
        descriptor.writable = isWritable;

        console.log(target, method, descriptor);

        return descriptor;
    };
}

export function timeout(ms = 0) {
    return function (target: any, method: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            setTimeout(() => originalMethod.apply(this, args), ms);
        };

        return descriptor;
    };
}

export function logParameter(target: any, method: string, index: number) {
    console.log(arguments);
    const key = `${method}_decor_params_indexes`;

    if (Array.isArray(target[key])) {
        target[key].push(index);
    } else {
        target[key] = [index];
    }
}

export function logMethod(target: any, method: string, descriptor: PropertyDescriptor) {
    const originMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const key = `${method}_decor_params_indexes`;
        const indexes = target[key];

        if (Array.isArray(indexes)) {
            args.forEach((el, idx) => {
                if (indexes.includes(idx)) {
                    console.log(`Method: ${method}, Param Index: ${idx}, Value: ${el}`);
                }
            });
        }

        return originMethod.apply(this, args);
    };

    return descriptor;
}

function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();
    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function format(prefix = 'Mr./Mrs.') {
    return function (target: any, propName: string) {
        makeProperty(
            target,
            propName,
            val => `${prefix} ${val}`,
            val => val
        );
    };
}

export function positiveInteger(target: any, propName: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set;

    descriptor.set = function (value: number) {
        if (!Number.isInteger(value) && value < 1) {
            throw new Error('Invalid value');
        }

        originalSet.call(this, value);
    };
}
