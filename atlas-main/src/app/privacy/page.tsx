
export default function PrivacyPage() {
  return (
    <div className="bg-background py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-headline text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: March 2024</p>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4">1. Data Ownership</h2>
            <p>You own your data. Atlas Wealth OS acts as a secure processor for your financial information. We do not sell, share, or monetize your personal or financial data under any circumstances.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4">2. Encryption</h2>
            <p>All sensitive financial data is encrypted at rest and in transit. Our zero-knowledge architecture ensures that even our developers cannot access your decrypted balance sheets or entity structures.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4">3. Information Collection</h2>
            <p>We only collect the minimum information necessary to provide the service: authentication credentials, basic profile information, and the financial data you explicitly choose to sync.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
