export class Cylinder {
    public static getBaseArea(radius: number): number {
        return Math.PI * radius * radius
    }

    public static getPerimeter(radius: number): number {
        return 2 * Math.PI * radius
    }

    public static getVolume(radius: number, height: number): number {
        let baseArea: number = this.getBaseArea(radius);
        let perimeter: number = this.getPerimeter(radius)
        return perimeter * height + 2 * baseArea;
    }

}