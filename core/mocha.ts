import Mocha from 'mocha';
import fs from 'fs';
import App from './app';

function getDirectoryFilesWithAbsolutePath(directoryAbsolutePath: string): string[] {
    return fs.readdirSync(directoryAbsolutePath).map(entryName => directoryAbsolutePath + '\\' + entryName);
}

class FileType {
    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    isDirectory(): boolean {
        return fs.lstatSync(this.filePath).isDirectory();
    }

    isTest(): boolean {
        return this.filePath.slice(-8) === '.spec.ts';
    }
}

function inspectFile(filePath: string): string[] {
    const file = new FileType(filePath);

    if (file.isDirectory()) return findTestFilesInDirectory(filePath);

    if (file.isTest()) return [filePath];

    return [];
}

function findTestFilesInDirectory(directory: string) {
    const folderFiles = getDirectoryFilesWithAbsolutePath(directory);

    return folderFiles.reduce((testFiles: string[], file: string) => testFiles.concat(inspectFile(file)), []);
}

function findTestFilesInDirectories(directories: string[]): string[] {
    return directories.reduce(
        (files: string[], directory: string) => files.concat(findTestFilesInDirectory(directory)),
        []
    );
}

async function runTestEnviroment() {
    await App;

    const mocha = new Mocha({
        timeout: 240000,
        color: true,
    });

    const testFiles: string[] = findTestFilesInDirectories(['modules', 'core']);

    testFiles.forEach(file => {
        mocha.addFile(file);
    });

    mocha.run(failures => {
        if (failures > 0) return process.exit(1);
        return process.exit(0);
    });
}

export default runTestEnviroment();
