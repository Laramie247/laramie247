import LiveStream from '@/components/LiveStream';
import { classes } from '@/lib/theme';

export const metadata = {
    title: 'Live Broadcast | Laramie 24x7',
    description: 'Watch our live broadcast streaming from Laramie, Wyoming',
};

export default function LivePage() {
    return (
        <main>
            <div className={classes.container}>
                <h1 className={classes.pageTitle}>Live Broadcast</h1>
                <LiveStream />
            </div>
        </main>
    );
} 