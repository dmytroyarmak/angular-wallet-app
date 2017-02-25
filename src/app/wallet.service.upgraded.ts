export function walletServiceFactory($injector: any) {
    return $injector.get('walletService');
}

export const walletServiceProvider = {
    provide: 'walletService',
    deps: ['$injector'],
    useFactory: walletServiceFactory
};
