from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import subprocess
import time
import os

# CHANGE THIS PATH to your local repo folder (inside OneDrive or anywhere else)
WATCH_PATH = '/Users/yourname/Desktop/mycode'  # <-- Replace with your actual path

class GitAutoPushHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        if event.is_directory:
            return
        print(f'Change detected: {event.src_path}')
        try:
            subprocess.run(["git", "add", "."], cwd=WATCH_PATH)
            subprocess.run(["git", "commit", "-m", "Auto update from script"], cwd=WATCH_PATH)
            subprocess.run(["git", "push"], cwd=WATCH_PATH)
            print("✅ Changes pushed to GitHub.")
        except Exception as e:
            print("❌ Git push failed:", e)

if __name__ == "__main__":
    event_handler = GitAutoPushHandler()
    observer = Observer()
    observer.schedule(event_handler, WATCH_PATH, recursive=True)
    observer.start()
    print(f"👀 Watching for changes in: {WATCH_PATH}")

    try:
        while True:
            time.sleep(5)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
