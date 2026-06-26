#!/bin/bash

# ==========================================
# Balaji OS Skill Installer Script
# ==========================================

# Colors for terminal styling
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

SKILL_NAME="balajitechlabs-portfolio-complete"
SKILL_DIR="skills/$SKILL_NAME"
GLOBAL_ROOT="$HOME/.gemini/config/skills"
LOCAL_ROOT=".agents/skills"

# Function to display help
show_help() {
    echo -e "${CYAN}Balaji OS Design System Skill Installer${NC}"
    echo "Usage: bash skill.sh [option]"
    echo ""
    echo "Options:"
    echo "  -l, --local      Install locally to .agents/skills/ in the current directory"
    echo "  -g, --global     Install globally to ~/.gemini/config/skills/"
    echo "  -d, --dry-run    Show where files will be copied without actually copying"
    echo "  -h, --help       Show this help message"
    echo ""
}

# Main installer function
install_skill() {
    local target_root="$1"
    local install_type="$2"
    local dry_run="$3"
    
    local target_path="$target_root/$SKILL_NAME"
    
    echo -e "${BLUE}[*] Preparing to install ${CYAN}$SKILL_NAME${BLUE} as ${CYAN}$install_type${BLUE}...${NC}"
    
    if [ "$dry_run" = "true" ]; then
        echo -e "${YELLOW}[DRY-RUN] Would create directory: $target_path${NC}"
        echo -e "${YELLOW}[DRY-RUN] Would copy content of '$SKILL_DIR' to '$target_path'${NC}"
        return 0
    fi
    
    # Create the directory structure
    mkdir -p "$target_path"
    if [ $? -ne 0 ]; then
        echo -e "${RED}[error] Failed to create directory: $target_path${NC}"
        exit 1
    fi
    
    # Copy SKILL.md and support folders
    cp -R "$SKILL_DIR/"* "$target_path/"
    if [ $? -ne 0 ]; then
        echo -e "${RED}[error] Failed to copy skill files to: $target_path${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}[+] Successfully installed skill to: ${CYAN}$target_path${NC}"
    echo -e "${GREEN}[+] Done! Your Antigravity AI agent will now recognize this skill.${NC}"
}

# Check argument count
if [ $# -eq 0 ]; then
    show_help
    exit 0
fi

DRY_RUN="false"
ACTION=""

# Parse arguments
while [[ $# -gt 0 ]]; do
    case "$1" in
        -h|--help)
            show_help
            exit 0
            ;;
        -l|--local)
            ACTION="local"
            shift
            ;;
        -g|--global)
            ACTION="global"
            shift
            ;;
        -d|--dry-run)
            DRY_RUN="true"
            shift
            ;;
        *)
            echo -e "${RED}[error] Unknown parameter: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

# Perform action
case "$ACTION" in
    local)
        install_skill "$LOCAL_ROOT" "Local Workspace Skill" "$DRY_RUN"
        ;;
    global)
        install_skill "$GLOBAL_ROOT" "Global Skill" "$DRY_RUN"
        ;;
    *)
        if [ "$DRY_RUN" = "true" ]; then
            echo -e "${YELLOW}[DRY-RUN] Defaulting to dry-run of local workspace installation...${NC}"
            install_skill "$LOCAL_ROOT" "Local Workspace Skill" "true"
        else
            echo -e "${RED}[error] Please specify either --local (-l) or --global (-g) flag.${NC}"
            show_help
            exit 1
        fi
        ;;
esac
